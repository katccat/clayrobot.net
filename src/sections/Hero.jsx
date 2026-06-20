import { LINKEDIN } from '../links'

const INDEX = [
  { label: 'About', href: '/about/' },
  { label: 'Games', href: '/projects/' },
  { label: 'Posts', href: '/posts/' },
  { label: 'Contact', href: LINKEDIN },
]

export default function Hero() {
  return (
    <section className="hero">
        <h1 className="hero__wordmark">
          CLAY<wbr/>ROBOT<wbr/>.net
        </h1>
        <ul className="hero__index">
          {INDEX.map((item) => (
            <li className="hero__index-item" key={item.n}>
              <a href={item.href}>
                <span className="hero__index-label">{item.label}</span>
                <span className="hero__index-meta">
                  {/* .{item.n} */}
                  <span className="hero__index-arrow" aria-hidden="true">
                    <img src="/images/arrow.svg"/>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
    </section>
  )
}
