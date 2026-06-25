import { Routes, Route, Outlet } from 'react-router-dom'
import { useTheme } from './useTheme.js'
import SiteNav from './components/SiteNav.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Home from './sections/Home.jsx'
import AboutPage from './AboutPage.jsx'
import Projects from './Projects.jsx'
import Posts from './Posts.jsx'
import NotFound from './NotFound.jsx'

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
        <Route path="*" element={<NotFound />} />
      </Route>
      
    </Routes>
  )
}
