import { Routes, Route, Outlet } from 'react-router-dom'
import { useTheme } from './useTheme.js'
import Splash from './components/Splash.jsx'
import SiteNav from './components/SiteNav.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Hero from './sections/Hero.jsx'
import Img from './Img.jsx'
import FeaturedProjects from './sections/FeaturedProjects.jsx'
import ArtStation from './sections/ArtStation.jsx'
import AboutPage from './AboutPage.jsx'
import Projects from './Projects.jsx'
import Posts from './Posts.jsx'
import NotFound from './NotFound.jsx'

function Home() {
  return (
    <>
      {/* <Splash /> */}
      <main className="site-main">
        {/* <img src="/images/grid.webp" className="hero-image"></img> */}
        <div className="home-flex">
        <Hero />
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

function Layout({ theme, toggle }) {
  return (
    <>
      <SiteNav theme={theme} onToggleTheme={toggle} />
      <div className="site-nav-spacer" />
      <Outlet />
      <SiteFooter />
    </>
  )
}

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <Routes>
      <Route element={<Layout theme={theme} toggle={toggle} />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
