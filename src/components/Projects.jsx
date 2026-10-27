const projects = [
  {
    number: '01',
    title: 'E-Commerce Platform',
    description: 'A full stack shopping experience with a smooth browsing flow, product discovery, and a clean checkout-ready interface.',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    number: '02',
    title: 'Task Management App',
    description: 'A focused productivity tool designed to make organizing daily work simple, clear, and satisfying.',
    technologies: ['JavaScript', 'Express.js', 'Tailwind'],
  },
  {
    number: '03',
    title: 'Portfolio Website',
    description: 'A responsive personal website that brings together a developer story, skills, projects, and an easy way to connect.',
    technologies: ['HTML', 'CSS', 'Tailwind', 'GitHub'],
  },
]

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">Featured projects</h2>
          </div>
          <p className="section-note">A few things I&apos;ve built while sharpening my craft.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-topline"><span>{project.number}</span><span className="project-arrow">↗</span></div>
              <div className="project-preview"><span>{project.number}</span><span className="preview-line" /></div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
