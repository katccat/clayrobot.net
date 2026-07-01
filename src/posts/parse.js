import MarkdownIt from 'markdown-it'

// Shared by the browser (src/posts/index.js) and the build-time post-pages
// plugin, so both derive identical frontmatter + HTML from the same .md files.
const md = new MarkdownIt({ html: true, linkify: true, typographer: true })

// Render a markdown body to an HTML string.
export function renderMarkdown(body) {
  return md.render(body)
}

// Minimal `--- ... ---` frontmatter parser. Supports simple `key: value`
// lines (values may be quoted); intentionally avoids gray-matter to keep the
// browser bundle free of its Node/Buffer dependency.
export function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!match) return { data: {}, body: raw }

  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue
    const sep = line.indexOf(':')
    if (sep === -1) continue
    const key = line.slice(0, sep).trim()
    let value = line.slice(sep + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    data[key] = value
  }
  return { data, body: match[2] }
}

// Normalize one raw .md string into a post object. `fallbackSlug` is used when
// frontmatter omits `slug` (e.g. derived from the filename).
export function toPost(raw, fallbackSlug) {
  const { data, body } = parseFrontmatter(raw)
  const slug = data.slug || fallbackSlug
  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    description: data.description || '',
    image: data.image || '',
    html: renderMarkdown(body),
  }
}

// Newest first; posts without a date sort last.
export function byDateDesc(a, b) {
  return (b.date || '').localeCompare(a.date || '')
}
