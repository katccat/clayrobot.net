import { LINKEDIN } from '../links'
import { GITHUB } from '../links'
import IndexList from '../IndexList'
import Img from '../Img.jsx'
import FeaturedProjects from './FeaturedProjects.jsx'
// import Splash from '../components/Splash.jsx'
// import ArtStation from './ArtStation.jsx'

const INDEX = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Posts', href: '/posts' },
  { label: 'GitHub', href: GITHUB, external: true },
]

export default function Home() {
  return (
    <>
      {/* <Splash /> */}
      <main className="site-main">
        {/* <img src="/images/grid.webp" className="hero-image"></img> */}
        <div className="home-flex">
          <section className="hero">
            <h1 className="hero__wordmark">
              CLAY<br/>ROBOT<br/>.net
            </h1>
            <IndexList index={INDEX} />
          </section>
          <Img src="/images/robotma/robotma-halftone-shadow.png" className='companion-image companion-image--desktop' />
          <Img src="/images/robotma/robotma-halftone-bg.png" className='companion-image companion-image--mobile' />
        </div>
        <br></br>
        <header className="section-head">
          <h2 className="section-head__title">Featured Projects</h2>
        </header>
        <FeaturedProjects />
        {/* <ArtStation /> */}
      </main>
    </>
  )
}
