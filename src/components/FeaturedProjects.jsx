import { projects } from '../projects'
import { PLACEHOLDER_IMG } from '../consts';

export default function FeaturedProjects({ projectKeys = [], gamesOnly = false }) {
  const projectList = (projectKeys.length > 0
    ? projectKeys.map(key => projects.get(key)).filter(Boolean)
    : projects.getAll())
    .filter(project => !gamesOnly || project.game === true);
  
  return (
    <section className="featured" id="featured">
      <div className="tile-grid">
        {projectList.map((project) => (
          <article className="tile" key={project.title}>
            <a className="tile__link no-animate" href={project.href}>
              <div
                className='tile__media'
                style={{
                  backgroundImage: `url(${project.image ?? PLACEHOLDER_IMG})`,
                  ...(project.pixelatedImage && {imageRendering: 'pixelated'})
                }}
              ></div>
              <div className="tile__body">
                <h3 className="tile__title">{project.title}</h3>
                <p className="tile__desc">{project.description}</p>
              </div>
            </a>
            {(project.source && !gamesOnly) && (
              <a
              className="tile__source no-animate"
              href={project.source}
              // target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source on GitHub`}
            >
              GitHub
            </a>
            )}
            
          </article>
        ))}
      </div>
    </section>
  )
}
