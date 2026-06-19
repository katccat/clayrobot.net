import { GITHUB, LINKEDIN } from '../links'

const FOOTER_LINKS = [
  { label: 'LinkedIn', href: LINKEDIN },
  { label: 'GitHub', href: GITHUB },
  { label: 'About', href: '/about/' },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* <div className="site-footer__mark">CLAYROBOT</div> */}
      <ul className="site-footer__links">
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="site-footer__meta">© Khan {new Date().getFullYear()}</p>
    </footer>
  )
}
