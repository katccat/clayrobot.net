const INDEX = [
  { label: 'About', href: '/about/', n: '01' },
  { label: 'Projects', href: '/projects/', n: '02' },
  { label: 'Posts', href: '/posts/', n: '03' },
  { label: 'Contact', href: 'https://www.linkedin.com/in/khan-lagemann-52312a305/', n: '04' },
]

export default function Hero() {
  return (
    <div className="hero">
      <img src="/images/grid.webp" className="hero-image"></img>
      <section className="hero-content">
        <h1 className="hero__wordmark" data-matrix>
          CLAY<wbr/>ROBOT<wbr/>.net
        </h1>
        <ul className="hero__index">
          {INDEX.map((item) => (
            <li className="hero__index-item" key={item.n}>
              <a
                href={item.href}
                {...(item.external
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
              >
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
    </div>
  )
}
