import { LINKEDIN } from '../links.js'
import { GITHUB } from '../links.js'
import LinkList from '../components/LinkList.jsx'
import Img from '../Img.jsx'
import FeaturedProjects from '../components/FeaturedProjects.jsx'
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
        <title>CLAYROBOT</title>
        {/* <img src="/images/grid.webp" className="hero-image"></img> */}
        <div className="home-flex">
          <section className="hero">
            <h1 className="hero__wordmark">
              CLAY<br/>ROBOT<br/>.net
            </h1>
            <LinkList index={INDEX} />
          </section>
          <Img src="/images/robotma/robotma-halftone.png" className='companion-image companion-image--desktop' />
          <Img src="/images/robotma/robotma-halftone-bg.png" className='companion-image companion-image--mobile' />
        </div>
        <hr></hr>
        <header>
          <h2 className="section-head__title">Featured Projects</h2>
        </header>
        <FeaturedProjects />
        {/* <ArtStation /> */}
      </main>
    </>
  )
}
