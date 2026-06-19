import { useTheme } from './useTheme.js'
import Splash from './components/Splash.jsx'
import SiteNav from './components/SiteNav.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Hero from './sections/Hero.jsx'
import FeaturedProjects from './sections/FeaturedProjects.jsx'
import ArtStation from './sections/ArtStation.jsx'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Splash />
      <SiteNav theme={theme} onToggleTheme={toggle} />
      <div className="site-nav-spacer" />
      <main className="site-main">
        {/* <img src="/images/grid.webp" className="hero-image"></img> */}
        <Hero />
        <FeaturedProjects projectKeys={['inar']} />
        {/* <ArtStation /> */}
      </main>
      <SiteFooter />
    </>
  )
}
