import { Link } from 'react-router-dom'
import { GITHUB, LINKEDIN } from '../consts'

const FOOTER_LINKS = [
  { label: 'LinkedIn', href: LINKEDIN, external: true },
  { label: 'GitHub', href: GITHUB, external: true },
  { label: 'Legal', href: '/legal' },
]

export default function SiteFooter() {
  return (
    <>
      <hr className='no-space'></hr>
      <footer className="site-footer">
        <ul className="site-footer__links">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a href={link.href} rel="noopener noreferrer">
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
    </>
  )
}
