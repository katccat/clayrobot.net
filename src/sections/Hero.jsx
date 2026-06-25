import { LINKEDIN } from '../links'
import { GITHUB } from '../links'
import IndexList from '../IndexList'

const INDEX = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Posts', href: '/posts' },
  { label: 'GitHub', href: GITHUB, external: true },
]

export default function Hero() {
  return (
    <section className="hero">
        <h1 className="hero__wordmark">
          CLAY<br/>ROBOT<br/>.net
        </h1>
        <IndexList index={INDEX} />
    </section>
  )
}
