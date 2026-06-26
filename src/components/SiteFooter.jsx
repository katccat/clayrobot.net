import { Link } from 'react-router-dom'
import { GITHUB, LINKEDIN, DONATE } from '../consts'

const FOOTER_LINKS = [
  { label: 'LinkedIn', href: LINKEDIN, external: true },
  { label: 'GitHub', href: GITHUB, external: true },
  { label: 'About', href: '/about' },
  { label: 'Donate', href: DONATE, external: true },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* <div className="site-footer__mark">CLAYROBOT</div> */}
      <ul className="site-footer__links">
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link to={link.href}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
      <p className="site-footer__meta">© Khan {new Date().getFullYear()}</p>
    </footer>
  )
}
