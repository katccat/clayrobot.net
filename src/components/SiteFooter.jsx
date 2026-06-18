const FOOTER_LINKS = [
  { label: 'LinkedIn', href: '#', external: true },
  { label: 'GitHub', href: '#', external: true },
  { label: 'About', href: '/about/', external: false },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* <div className="site-footer__mark">CLAYROBOT</div> */}
      <ul className="site-footer__links">
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external
                ? { target: '_blank', rel: 'noreferrer noopener' }
                : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="site-footer__meta">© Khan {new Date().getFullYear()}</p>
    </footer>
  )
}
