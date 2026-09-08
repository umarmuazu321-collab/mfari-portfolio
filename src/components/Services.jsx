const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building clean, functional frontend interfaces with modern web technologies.',
  },
  {
    number: '02',
    title: 'Responsive Website Design',
    description: 'Creating websites that work smoothly across phones, tablets, laptops, and desktop screens.',
  },
  {
    number: '03',
    title: 'Business Websites',
    description: 'Creating professional websites that help businesses establish a strong online presence.',
  },
  {
    number: '04',
    title: 'UI Development',
    description: 'Turning designs and ideas into polished, accessible, and user-friendly web interfaces.',
  },
]

function Services() {
  return (
    <section id="services" className="relative overflow-hidden border-t border-white/10 bg-[#0d1225] px-6 py-24 text-white lg:px-10 lg:py-32">
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#5865f2]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#8d9cff]">
            <span className="h-px w-8 bg-[#8d9cff]" /> 04 / SERVICES
          </p>
          <h2 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            From first idea to polished interface.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            I help turn ideas into responsive, modern, and user-friendly web experiences with a thoughtful focus on clarity and function.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.number} className="group relative flex min-h-80 flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#5865f2]/70 hover:bg-white/[0.06] sm:p-7">
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8d9cff]">{service.number}</span>
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#8d9cff]/35 text-[#aeb8ff] transition-colors duration-300 group-hover:border-[#8d9cff] group-hover:bg-[#5865f2]/15" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#8d9cff]" />
                  <span className="absolute h-5 w-5 rounded-full border border-[#8d9cff]/40" />
                </span>
              </div>
              <div className="mt-auto">
                <h3 className="max-w-[13rem] text-2xl font-semibold leading-tight tracking-[-0.04em]">{service.title}</h3>
                <div className="my-5 h-px w-full bg-white/10 transition-colors duration-300 group-hover:bg-[#5865f2]/60" />
                <p className="text-sm leading-7 text-white/55">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services