import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../posts/index.js'
import { SITE_NAME } from '../consts.js'
import NotFound from './NotFound.jsx'
import '../styles/posts.css'

function formatDate(date) {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

// Update the description <meta> for client-side navigation. Unfurlers read the
// static per-post HTML from the post-pages plugin; this keeps the live DOM in
// sync once the SPA takes over.
function setMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export default function Post() {
  const { slug } = useParams()
  const post = getPost(slug)

  useEffect(() => {
    if (!post) return
    // Runs before the Layout's ScrollToTop effect (child effects fire first),
    // and ScrollToTop leaves /posts/* titles alone, so this one sticks.
    document.title = `${SITE_NAME}: ${post.title}`
    if (post.description) setMetaDescription(post.description)
  }, [post])

  if (!post) return <NotFound />

  return (
    <main className="site-main">
      <article className="post">
        {/* <Link to="/posts" className="post__back">
          Return
        </Link> */}
        <h1 className="post__title">{post.title}</h1>
        {post.date && (
          <time className="post__date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        )}
        <div
          className="post__body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  )
}
