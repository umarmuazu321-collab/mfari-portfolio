const projects = [
  {
    number: '01',
    name: 'AKOYA',
    fullName: 'AKOYA Luxury Laundry',
    description: 'A modern responsive laundry service website designed with a clean professional interface and a smooth booking/pickup experience.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    links: [
      { label: 'View Live Site', href: 'https://akoya-laundry-henna.vercel.app/' },
      { label: 'View Code', href: 'https://github.com/umarmuazu321-collab/akoya-laundry' },
    ],
    tone: 'from-[#29345f] via-[#20294b] to-[#121a35]',
    mark: 'AL',
  },
  {
    number: '02',
    name: 'KHADYCANDY',
    fullName: 'KHADYCANDY',
    description: 'A completed project in my frontend portfolio.',
    technologies: [],
    links: [
      { label: 'View Live Site', href: 'https://khadycandy.vercel.app/' },
    ],
    tone: 'from-[#3b2858] via-[#291d45] to-[#141229]',
    mark: 'KC',
  },
]

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#0d1225] px-6 py-24 text-white lg:px-10 lg:py-32">
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#5865f2]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#8d9cff]">
            <span className="h-px w-8 bg-[#8d9cff]" /> 03 / PROJECTS
          </p>
          <h2 className="mt-7 text-4xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">Selected Work.</h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            A selection of completed projects shaped with care, clarity, and a focus on useful digital experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.fullName} className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1 hover:border-[#5865f2]/70">
              <div className={`relative flex min-h-72 items-center justify-center overflow-hidden bg-gradient-to-br ${project.tone} px-6 py-12 sm:min-h-80`}>
                <div className="absolute inset-5 rounded-xl border border-white/10" />
                <span className="absolute left-8 top-7 text-xs font-bold tracking-[0.2em] text-white/50">PROJECT {project.number}</span>
                <span className="absolute bottom-7 right-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Completed Project</span>
                <div className="relative text-center transition-transform duration-500 group-hover:scale-105">
                  <span className="block text-xs font-bold uppercase tracking-[0.35em] text-[#aeb8ff]">{project.mark}</span>
                  <h3 className="mt-4 max-w-md text-3xl font-bold tracking-[-0.06em] sm:text-5xl">{project.name}</h3>
                  <div className="mx-auto mt-5 h-px w-16 bg-[#8d9cff]" />
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{project.fullName}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">{project.description}</p>
                {project.technologies.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.fullName} technologies`}>
                    {project.technologies.map((technology) => (
                      <li key={technology} className="rounded-full border border-[#8d9cff]/30 px-3 py-1.5 text-xs font-medium text-[#c3caff]">{technology}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                  {project.links.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center rounded-full px-4 py-2.5 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#aeb8ff] ${index === 0 ? 'bg-[#5865f2] text-white hover:bg-[#6975ff]' : 'border border-[#8d9cff]/40 text-[#c3caff] hover:border-[#aeb8ff] hover:text-white'}`}
                    >
                      {link.label}
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