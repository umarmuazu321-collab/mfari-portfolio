const projects = [
  {
    number: '01',
    name: 'BUSINESS MANAGER',
    fullName: 'Business Manager',
    description: 'A modern business management system for managing products, sales, expenses, customers, and business records in one place.',
    technologies: ['React', 'Vite', 'Supabase'],
    links: [
      { label: 'View Live Site', href: 'https://business.maliyahjr.com.ng' },
      { label: 'View Code', href: 'https://github.com/umarmuazu321-collab/business-manager' },
    ],
    mark: 'BM',
    image: '/assets/projects/business-manager-preview.png',
    imageAlt: 'Business Manager dashboard preview',
    start: '#28355b',
    end: '#111a2f',
    accent: '#c4f36b',
  },
  {
    number: '02',
    name: 'ALBARAKA',
    fullName: 'Albaraka Food Items',
    description: 'A modern food business website designed to showcase products with a clean, attractive, and user-friendly digital experience.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    links: [{ label: 'View Live Site', href: 'https://albaraka-food-items.vercel.app/' }],
    mark: 'AF',
    image: '/assets/projects/albaraka-food-items-preview.png',
    imageAlt: 'Albaraka Food Items website preview',
    start: '#654429',
    end: '#241711',
    accent: '#ffd28f',
  },
  {
    number: '03',
    name: 'AKOYA',
    fullName: 'AKOYA Luxury Laundry',
    description: 'A modern responsive laundry service website designed with a clean professional interface and a smooth booking/pickup experience.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    links: [
      { label: 'View Live Site', href: 'https://akoya-laundry-henna.vercel.app/' },
      { label: 'View Code', href: 'https://github.com/umarmuazu321-collab/akoya-laundry' },
    ],
    mark: 'AL',
    image: '/assets/projects/akoya-luxury-laundry-preview.png',
    imageAlt: 'AKOYA Luxury Laundry website preview',
    start: '#2c4560',
    end: '#111c2c',
    accent: '#a8dcff',
  },
  {
    number: '04',
    name: 'KHADYCANDY',
    fullName: 'KHADYCANDY',
    description: 'A modern frontend project created with a clean interface and a focus on attractive digital presentation.',
    technologies: [],
    links: [{ label: 'View Live Site', href: 'https://khadycandy.vercel.app/' }],
    mark: 'KC',
    image: '/assets/projects/khadycandy-preview.png',
    imageAlt: 'KHADYCANDY website preview',
    start: '#4b3261',
    end: '#1b1528',
    accent: '#f4b6ff',
  },
]

function Projects() {
  return (
    <section id="projects" className="section section-light">
      <div className="section-inner">
        <div className="section-header section-header-wide">
          <p className="section-label">03 / Projects</p>
          <div>
            <h2 className="section-title">Selected <em>work.</em></h2>
            <p className="section-intro">A selection of completed projects shaped with care, clarity, and a focus on useful digital experiences.</p>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.fullName} className="project-card">
              <div className="project-preview">
                <img className="project-image" src={project.image} alt={project.imageAlt} />
              </div>

              <div className="project-content">
                <div className="project-content-head">
                  <h3 className="project-name">{project.fullName}</h3>
                  <span className="project-index">{project.number}</span>
                </div>
                <p className="project-description">{project.description}</p>
                {project.technologies.length > 0 && (
                  <ul className="tech-list" aria-label={project.fullName + ' technologies'}>
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                )}
                <div className="project-actions">
                  {project.links.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={'button ' + (index === 0 ? 'button-primary' : 'button-ghost')}
                    >
                      {index === 0 ? 'Live site' : 'GitHub'} <span className="arrow" aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
