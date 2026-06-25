import { Link } from 'react-router-dom'

export default function LinkList({ index, showArrow = true }) {
  return (
    <ul className="hero__index">
      {index.map((item) => {
        const inner = (
          <>
            <span className="hero__index-label">{item.label}</span>
            {showArrow && (
              <span className="hero__index-meta">
                <span className="hero__index-arrow" aria-hidden="true">
                  <img src="/images/arrow.svg" alt="" />
                </span>
              </span>
            )}
          </>
        )
        return (
          <li className="hero__index-item" key={item.label}>
            {item.external ? (
              <a href={item.href} className='no-animate' target="_blank" rel="noopener noreferrer">
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
