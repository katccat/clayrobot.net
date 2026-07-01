import { readdirSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { toPost, byDateDesc } from '../src/posts/parse.js'

const POSTS_DIR = resolve('src/posts')

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeText(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// Absolute URL for og: tags (they must be fully-qualified for unfurlers).
function abs(siteUrl, path) {
  if (!path) return path
  if (/^https?:\/\//.test(path)) return path
  return siteUrl.replace(/\/$/, '') + (path.startsWith('/') ? path : '/' + path)
}

// Load posts straight from disk (the plugin runs in Node, so it can't use the
// browser's import.meta.glob); mirrors src/posts/index.js.
function loadPosts() {
  return readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => toPost(readFileSync(join(POSTS_DIR, f), 'utf8'), f.replace(/\.md$/, '')))
    .sort(byDateDesc)
}

// Rewrite the built index.html shell into a post-specific page: correct head
// tags for crawlers/unfurlers, plus the rendered body pre-filled into #root so
// there's real content before (and without) JS.
function renderPostHtml(shell, post, siteUrl) {
  const fullTitle = `CLAYROBOT: ${post.title}`
  const url = abs(siteUrl, `/posts/${post.slug}`)
  const image = post.image ? abs(siteUrl, post.image) : null

  let html = shell

  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeText(fullTitle)}</title>`
  )

  const descTag = `<meta name="description" content="${escapeAttr(post.description)}" />`
  html = /<meta name="description"[^>]*>/.test(html)
    ? html.replace(/<meta name="description"[^>]*>/, descTag)
    : html.replace('</head>', `    ${descTag}\n  </head>`)

  html = html.replace(
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${escapeAttr(post.title)}">`
  )
  html = html.replace(
    /<meta property="og:type"[^>]*>/,
    `<meta property="og:type" content="article">`
  )
  html = /<meta property="og:url"[^>]*>/.test(html)
    ? html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${escapeAttr(url)}">`)
    : html
  if (image) {
    html = html.replace(
      /<meta property="og:image"[^>]*>/,
      `<meta property="og:image" content="${escapeAttr(image)}">`
    )
  }

  // og:description + canonical, injected fresh.
  const extraHead =
    `    <meta property="og:description" content="${escapeAttr(post.description)}">\n` +
    `    <link rel="canonical" href="${escapeAttr(url)}">\n  </head>`
  html = html.replace('</head>', extraHead)

  const body =
    `<main class="site-main"><article class="post">` +
    `<h1 class="post__title">${escapeText(post.title)}</h1>` +
    (post.date ? `<time class="post__date" datetime="${escapeAttr(post.date)}">${escapeText(post.date)}</time>` : '') +
    `<div class="post__body">${post.html}</div>` +
    `</article></main>`
  html = html.replace(
    /<div id="root">\s*<\/div>/,
    `<div id="root">${body}</div>`
  )

  return html
}

// Emits dist/posts/<slug>/index.html for every markdown post. Netlify serves
// these real files before the SPA fallback, so each post URL has correct static
// meta + content; the SPA still hydrates and takes over for real visitors.
export default function postPages({ siteUrl = 'https://clayrobot.net' } = {}) {
  let outDir

  return {
    name: 'post-pages',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const shellPath = join(outDir, 'index.html')
      let shell
      try {
        shell = readFileSync(shellPath, 'utf8')
      } catch {
        this.warn('post-pages: dist/index.html not found; skipping')
        return
      }

      const posts = loadPosts()
      for (const post of posts) {
        const dir = join(outDir, 'posts', post.slug)
        mkdirSync(dir, { recursive: true })
        writeFileSync(join(dir, 'index.html'), renderPostHtml(shell, post, siteUrl))
      }
      this.info?.(`post-pages: wrote ${posts.length} post page(s)`)
    },
  }
}
