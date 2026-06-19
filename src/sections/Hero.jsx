import { LINKEDIN } from '../links'

const INDEX = [
  { label: 'About', href: '/about/', n: '01' },
  { label: 'Games', href: '/projects/', n: '02' },
  { label: 'Posts', href: '/posts/', n: '03' },
  { label: 'Contact', href: LINKEDIN, n: '04' },
]

export default function Hero() {
  return (
    <section className="hero">
        <h1 className="hero__wordmark" data-matrix>
          clay<wbr/>robot<wbr/>.net
        </h1>
        <ul className="hero__index">
          {INDEX.map((item) => (
            <li className="hero__index-item" key={item.n}>
              <a href={item.href}>
                <span className="hero__index-label">{item.label}</span>
                <span className="hero__index-meta">
                  {/* .{item.n} */}
                  <span className="hero__index-arrow" aria-hidden="true">
                    <img src="/images/arrow2.svg"/>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
    </section>
  )
}
