const LINKS = [
  { label: 'Projects', href: '/projects/' },
  { label: 'Posts', href: '/posts/' },
  { label: 'About', href: '/about/' },
]

export default function SiteNav({ theme, onToggleTheme }) {
  return (
    <nav className="site-nav">
      <a href="/" className="site-nav__logo">
        clayrobot
      </a>
      <div className="site-nav__right">
        <ul className="site-nav__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle color theme"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  )
}
