import { Link } from 'react-router-dom'
import { posts } from '../posts/index.js'
import Img from '../Img.jsx'
import styles from '../styles/post-list.module.css'

// Format an ISO date (YYYY-MM-DD) for display; leaves other strings untouched.
function formatDate(date) {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    // day: '2-digit',
    timeZone: 'UTC',
  })
}

export default function Posts() {
  return (
    <main className="site-main">
      <h1 className="about__subheading">
        {/* <mark> */}
        &lt;Posts&gt;
        {/* </mark> */}
      </h1>
      {posts.length === 0 ? (
        <>
          <br></br>
          <p className="posts-list__empty">
            Nothing here yet.
          </p>
        </>
      ) : (
        <ul className={`
        ${styles.linkList} ${styles.noLowerCase} ${styles.dashed}
        `}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.linkListEntry}>
              <Link to={`/posts/${post.slug}`} className="no-animate no-recolor">
              <span>
                <span className={styles.title}>{post.title}</span>
                {post.description && (
                  <p className={styles.description}>{post.description}</p>
                )}
                {post.date && (
                  <time className={styles.date} dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
