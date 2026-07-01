const VIRTUAL_ID = 'virtual:og-previews'
const RESOLVED_ID = '\0' + VIRTUAL_ID

// App Store / most sites gate their full markup behind a desktop UA.
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ' +
  'AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

// Pull og:* properties out of raw HTML without assuming attribute order.
function parseOg(html) {
  const og = {}
  const metas = html.match(/<meta\b[^>]*>/gi) || []
  for (const tag of metas) {
    const prop = tag.match(/property=["']og:([^"']+)["']/i)
    // Capture up to the matching quote so values may contain the other quote
    // char (e.g. an apostrophe inside a double-quoted content attribute).
    const content = tag.match(/content=(["'])([\s\S]*?)\1/i)
    if (prop && content) og[prop[1]] = decodeEntities(content[2])
  }
  return og
}

async function fetchPreview(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const og = parseOg(await res.text())
  return {
    title: og.title ?? null,
    description: og.description ?? null,
    image: og.image ?? null,
    siteName: og.site_name ?? null,
    url: og.url ?? url,
    imageAlt: og['image:alt'] ?? '',
  }
}

async function buildManifest(urls) {
  const manifest = {}
  await Promise.all(
    urls.map(async (url) => {
      try {
        manifest[url] = await fetchPreview(url)
      } catch (err) {
        console.warn(`[og-previews] failed to fetch ${url}:`, err.message)
        manifest[url] = null
      }
    })
  )
  return manifest
}

// Fetches OpenGraph metadata for the given URLs at build/dev-server start and
// exposes it as `virtual:og-previews`, a map of url -> { title, description,
// image, siteName, url, imageAlt }. Lets a static SPA render link previews for
// third-party pages that can't be fetched client-side (CORS).
export default function ogPreviews(urls = []) {
  let manifest = {}
  return {
    name: 'og-previews',
    async buildStart() {
      manifest = await buildManifest(urls)
    },
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id) {
      if (id === RESOLVED_ID) {
        return `export default ${JSON.stringify(manifest)}`
      }
    },
  }
}
