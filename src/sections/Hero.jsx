import { LINKEDIN } from '../links'
import { ARTSTATION } from '../links'
import { Link } from 'react-router-dom'

const INDEX = [
  { label: 'About', href: '/about' },
  // { label: 'Games', href: '/projects/' },
  { label: 'Posts', href: '/posts' },
  { label: 'Contact', href: LINKEDIN, external: true },
  { label: 'ArtStation', href: ARTSTATION, external: true },
]

export default function Hero() {
  return (
    <section className="hero">
        <h1 className="hero__wordmark">
          CLAY<br/>ROBOT<br/>.net
        </h1>
        <ul className="hero__index">
          {INDEX.map((item) => (
            <li className="hero__index-item" key={item.n}>

              <Link to={item.href}>
              {/* <a href={item.href}> */}
                <span className="hero__index-label">{item.label}</span>
                <span className="hero__index-meta">
                  <span className="hero__index-arrow" aria-hidden="true">
                    <img src="/images/arrow.svg"/>
                  </span>
                </span>
              </Link>
              {/* </a> */}
            </li>
          ))}
        </ul>
    </section>
  )
}
