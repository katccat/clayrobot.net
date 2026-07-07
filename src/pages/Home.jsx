import { LINKEDIN } from '../consts.js'
import { GITHUB } from '../consts.js'
import LinkList from '../components/LinkList.jsx'
import Img from '../Img.jsx'
import Featured from '../components/Featured.jsx'
import CascadeText from '../components/CascadeText.jsx'
import { useMediaQuery } from '../useMediaQuery.js'
// import Splash from '../components/Splash.jsx'
// import ArtStation from './ArtStation.jsx'

const INDEX = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Posts', href: '/posts' },
  { label: 'GitHub', href: GITHUB, external: true },
]

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  return (
    <>
      {/* <Splash /> */}
      <main className="site-main">
        {/* <img src="/images/grid.webp" className="hero-image"></img> */}
        <div className="home-flex">
          <section className="hero">
            <h1 className="hero__wordmark">
              <CascadeText text={'CLAY\nROBOT\n.net'} />
            </h1>
            <LinkList index={INDEX} />
          </section>
          {isMobile ? (
            <Img src="/images/robotma/robotma-halftone-bg.png" className='companion-image companion-image--mobile' fetchpriority="high" />
          ) : (
            <Img src="/images/robotma/robotma-halftone.png" className='companion-image companion-image--desktop' fetchpriority="high" />
          )}
        </div>

        <hr></hr>
        <Featured />
        <hr></hr>
        <Img src='/images/robotma/robotma-matrix.png'></Img>
      </main>
    </>
  )
}
