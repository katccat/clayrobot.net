import { Link } from 'react-router-dom'

export default function IndexList({ index, showArrow = true }) {
  return (
    <ul className="hero__index">
      {index.map((item) => (
        <li className="hero__index-item" key={item.label}>
          <Link to={item.href}>
            <span className="hero__index-label">{item.label}</span>
            {showArrow && (
              <span className="hero__index-meta">
                <span className="hero__index-arrow" aria-hidden="true">
                  <img src="/images/arrow.svg" />
                </span>
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
