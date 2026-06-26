import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'Posts', href: '/posts' },
  { label: 'About', href: '/about' },
]

export default function SiteNav({ theme, onToggleTheme }) {
  return (
    <>
      <nav className="site-nav">
        <Link to="/" className="site-nav__logo">
          clay<br></br>robot
        </Link>
        <div className="site-nav__right">
          <div className="site-nav__links">
            {LINKS.map((link) => (
              <NavLink key={link.label} to={link.href}>{link.label}</NavLink>
            ))}
          </div>
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
      <div className="site-nav-spacer" />
    </>
  )
}
