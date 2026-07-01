import { toPost, byDateDesc } from './parse.js'

// Eagerly load every markdown file in this folder as a raw string, so posts
// are bundled at build time (no runtime fetch). The folder is both the content
// store and the source for the /posts listing.
const files = import.meta.glob('./*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// Filename (minus extension) is the fallback slug when frontmatter omits one.
export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const fallbackSlug = path.replace(/^\.\//, '').replace(/\.md$/, '')
    return toPost(raw, fallbackSlug)
  })
  .sort(byDateDesc)

const bySlug = new Map(posts.map((post) => [post.slug, post]))

export function getPost(slug) {
  return bySlug.get(slug)
}
