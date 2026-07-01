// import GITHUB from './links'
import ProjectsGrid from "../components/ProjectsGrid"

export default function Projects() {
  return (
    <main className="site-main">
        <h1 className='about__title'>clayrobot Games</h1>
        <br></br>
        <ProjectsGrid gamesOnly={true} />
    </main>
  )
}
