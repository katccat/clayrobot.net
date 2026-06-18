const PROJECTS = [
  {
    title: "I'm not a Robot",
    description: 'A memory game built around the everyday captcha ritual.',
    href: '/games/recaptcha',
    source: 'https://github.com/katccat/daily-trends-memory-game',
  },
  {
    title: 'Asteroids 100',
    description: 'A take on the arcade classic, written in plain JavaScript.',
    href: '/games/asteroids',
    source: 'https://github.com/katccat/asteroids100',
  },
  {
    title: 'Autobahn Delivery Inc. Demo',
    description: 'Play as a humble package delivery drone working for Autobahn Delivery Inc. in a 2D physics-based game.',
    href: '/games/autobahn-delivery',
    source: 'https://github.com/katccat/AutobahnDelivery',
  },
  {
    title: 'damonwelber.com',
    description: 'A portfolio site designed and built for a working CFI.',
    href: 'https://damonwelber.com',
    source: 'https://github.com/katccat/CFI-Website',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="featured" id="featured">
      <header className="section-head">
        <h2 className="section-head__title">Featured Projects</h2>
        <span className="section-head__count">{PROJECTS.length} featured</span>
      </header>
      <div className="tile-grid">
        {PROJECTS.map((project) => (
          <article className="tile" key={project.title}>
            <a className="tile__link" href={project.href}>
              <div className="tile__media">
                <img src="/images/grid.png"></img>
              </div>
              <div className="tile__body">
                <h3 className="tile__title">{project.title}</h3>
                <p className="tile__desc">{project.description}</p>
              </div>
            </a>
            <a
              className="tile__source"
              href={project.source}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} source on GitHub`}
            >
              GitHub ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
