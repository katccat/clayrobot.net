import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useTheme } from './useTheme.js'
import SiteNav from './components/SiteNav.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Games from './pages/Games.jsx'
import Posts from './pages/Posts.jsx'
import NotFound from './pages/NotFound.jsx'

const DEFAULT_TITLE = 'CLAYROBOT'

const TITLES = {
  '/': 'CLAYROBOT',
  '/about': 'CLAYROBOT: about',
  '/projects': 'CLAYROBOT: projects',
  '/games': 'CLAYROBOT: games',
  '/posts': 'CLAYROBOT: posts',
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = TITLES[pathname] ?? DEFAULT_TITLE
  }, [pathname])

  return null
}

function Layout({ theme, toggle }) {
  return (
    <>
      <ScrollToTop />
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
        <Route path="/games" element={<Games />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
