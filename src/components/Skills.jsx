const skillGroups = [
  {
    number: '01',
    title: 'Frontend',
    description: 'The building blocks behind clear, functional web experiences.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    number: '02',
    title: 'Styling',
    description: 'Flexible visual systems that stay polished across screen sizes.',
    skills: ['Tailwind CSS', 'Responsive Design', 'UI Development'],
  },
  {
    number: '03',
    title: 'Tools',
    description: 'A focused toolkit for writing, managing, and refining code.',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
]

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-white/10 bg-[#0d1225] px-6 py-24 text-white lg:px-10 lg:py-32">
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#5865f2]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#8d9cff]">
            <span className="h-px w-8 bg-[#8d9cff]" /> 02 / SKILLS
          </p>
          <h2 className="mt-7 text-4xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            A solid foundation for the web.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            I work with modern frontend technologies to create responsive, clean, and user-friendly interfaces that make digital experiences feel simple and purposeful.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="group rounded-2xl border border-white/12 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#5865f2]/70 hover:bg-white/[0.06] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-[#8d9cff]">{group.number}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{group.title}</h3>
                </div>
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#5865f2] shadow-[0_0_18px_rgba(88,101,242,0.8)] transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
              </div>
              <p className="mt-5 min-h-14 text-sm leading-6 text-white/45">{group.description}</p>
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-5" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8d9cff]" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills