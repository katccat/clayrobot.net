import { Routes, Route } from 'react-router-dom'
import { useTheme } from './useTheme.js'
import Splash from './components/Splash.jsx'
import SiteNav from './components/SiteNav.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Hero from './sections/Hero.jsx'
import FeaturedProjects from './sections/FeaturedProjects.jsx'
import ArtStation from './sections/ArtStation.jsx'
import AboutPage from './AboutPage.jsx'
import Projects from './Projects.jsx'
import Posts from './Posts.jsx'

function Home() {
  return (
    <>
      {/* <Splash /> */}
      <main className="site-main">
        {/* <img src="/images/grid.webp" className="hero-image"></img> */}
        <div className="home-flex">
        <Hero />
        <img src="/images/robotma/robotma-halftone-shadow.png" width='704' height='1050' className='companion-image companion-image--desktop' />
        <img src="/images/robotma/robotma-halftone-bg.png" width='771' height='1009' className='companion-image companion-image--mobile' />
        </div>
        {/* <header className="section-head">
          <h2 className="section-head__title">News</h2>
        </header>
        <img src='images/inar_icon.webp'></img>
        <p>
          We're excited to announce that I'm not a Robot is now available on the Apple App Store!
        </p> */}
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

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <SiteNav theme={theme} onToggleTheme={toggle} />
      <div className="site-nav-spacer" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <SiteFooter />
    </>
  )
}
