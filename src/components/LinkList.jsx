import { Link } from 'react-router-dom'
import styles from '../styles/link-list.module.css'

export default function LinkList({ index, showArrow = true, noLowerCase = false }) {
  return (
    <ul className={`${styles.linkList}${noLowerCase ? ` ${styles.noLowerCase}` : ''}`}>
      {index.map((item) => {
        const inner = (
          <>
            <span>{item.label}</span>
            {showArrow && (
              <span className={styles.linkListMeta}>
                <span className={`${styles.arrow} ${styles.arrow}`} aria-hidden="true">
                  <img src="/images/arrow.svg" alt="" />
                </span>
              </span>
            )}
          </>
        )
        return (
          <li className={styles.linkListEntry} key={item.label}>
            {item.external ? (
              <a href={item.href} className='no-animate' rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <Link className='no-animate' to={item.href}>{inner}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}