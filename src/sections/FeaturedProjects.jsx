import { projects } from '../projects'

export default function FeaturedProjects({ projectKeys = [] }) {
  const projectList = projectKeys.length > 0
    ? projectKeys.map(key => projects.get(key)).filter(Boolean)
    : projects.getAll();
  // console.log(projectKeys);
  console.log(projectList);
  
  return (
    <section className="featured" id="featured">
      <div className="tile-grid">
        {projectList.map((project) => (
          <article className="tile" key={project.title}>
            <a className="tile__link no-animate" href={project.href}>
              <div
                className={'tile__media' + (project.pixelatedImage ? ' pixelated' : '')}
                style={{
                  backgroundImage: `url(${project.image ?? "/images/placeholder.webp"})`,
                }}
              ></div>
              <div className="tile__body">
                <h3 className="tile__title">{project.title}</h3>
                <p className="tile__desc">{project.description}</p>
              </div>
            </a>
            {(project.source) && (
              <a
              className="tile__source no-animate"
              href={project.source}
              target="_blank"
              rel="noreferrer noopener"
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
