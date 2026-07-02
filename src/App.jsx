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
import Post from './pages/Post.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import NotFound from './pages/NotFound.jsx'
import Legal from './pages/Legal.jsx'

const NOT_FOUND_TITLE = 'CLAYROBOT: 404'

const TITLES = {
  '/': 'CLAYROBOT',
  '/about': 'CLAYROBOT: about',
  '/projects': 'CLAYROBOT: projects',
  '/games': 'CLAYROBOT: games',
  '/posts': 'CLAYROBOT: posts',
  '/legal': 'CLAYROBOT: legal',
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    // Individual posts (/posts/:slug) set their own title in Post.jsx; don't
    // clobber it here (this parent effect runs after the child's).
    if (pathname.startsWith('/posts/')) return
    document.title = TITLES[pathname] ?? NOT_FOUND_TITLE
  }, [pathname])

  return null
}

function Layout({ theme, toggle }) {
  return (
    <>
      <ScrollToTop />
      <SiteNav theme={theme} onToggleTheme={toggle} />
      <Outlet context={{ theme }} />
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
        <Route path="/posts" element={<ComingSoon />} />
        <Route path="/posts/:slug" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
