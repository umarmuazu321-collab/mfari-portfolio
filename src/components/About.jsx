function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0d1225] px-6 py-24 text-white lg:px-10 lg:py-32">
      <div className="absolute -right-40 top-16 h-80 w-80 rounded-full bg-[#5865f2]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#8d9cff]">
              <span className="h-px w-8 bg-[#8d9cff]" /> 01 / ABOUT
            </p>
            <p className="mt-8 max-w-xs text-sm leading-7 text-white/45">
              A considered approach to frontend development, where clarity and usability lead every decision.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Thoughtful interfaces, built for real people.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/65 sm:text-lg">
              <p>
                I’m a passionate Frontend Developer focused on building modern, responsive, and user-friendly web experiences. I turn ideas into clean and functional websites using modern web technologies, with a strong focus on performance, design, and user experience.
              </p>
              <p>
                My approach is practical and detail-minded: understand the purpose, shape a clear interface, and build a responsive experience that feels natural to use across screen sizes.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 border-t border-white/15 sm:grid-cols-4">
              {['Modern Frontend', 'Responsive Design', 'Clean UI', 'User Experience'].map((highlight) => (
                <div key={highlight} className="group border-b border-white/15 py-5 pr-4 sm:border-b-0 sm:border-r sm:pl-4 first:pl-0 last:border-r-0">
                  <span className="mb-4 block h-1 w-7 rounded-full bg-[#5865f2] transition-all duration-300 group-hover:w-12 group-hover:bg-[#8d9cff]" />
                  <p className="text-sm font-semibold leading-6 text-white/85">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About