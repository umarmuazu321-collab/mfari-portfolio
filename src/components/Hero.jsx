import profileImage from '../assets/profile.jpg'

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 12.5 12.5 3.5M5 3.5h7.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[720px] overflow-hidden bg-[#0d1225] text-white">
      <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full border border-[#5865f2]/30" />
      <div className="absolute bottom-[-10rem] left-[-8rem] -z-10 h-96 w-96 rounded-full bg-[#8d9cff]/10 blur-3xl" />
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-20 lg:pt-28">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8d9cff]">
            <span className="h-px w-8 bg-[#8d9cff]" /> Hello, I&apos;m
          </p>
          <h1 className="max-w-xl text-5xl font-bold leading-[0.98] tracking-[-0.07em] sm:text-7xl lg:text-[6.5rem]">
            Mfari <span className="text-[#c3caff]">WebDev</span>
          </h1>
          <p className="mt-7 text-xl font-medium text-[#c3caff] sm:text-2xl">Frontend Developer</p>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            I’m a passionate Frontend Developer focused on building modern, responsive, and user-friendly web experiences. I turn ideas into clean and functional websites using modern web technologies, with a strong focus on performance, design, and user experience.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-[#5865f2] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#aeb8ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1225]">
              View My Work <ArrowUpRight />
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-[#aeb8ff] hover:text-[#c3caff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#aeb8ff]">
              Let&apos;s Talk <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
          <div className="absolute -inset-5 rounded-[2rem] border border-[#c3caff]/20" />
          <div className="absolute -bottom-7 -left-7 h-24 w-24 rounded-full border-[12px] border-[#5865f2]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#c3caff] shadow-2xl shadow-black/30">
            <img src={profileImage} alt="Mfari WebDev" className="h-full w-full object-cover object-center grayscale-[15%] transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d1225]/60 to-transparent" />
          </div>
          <div className="absolute -right-5 top-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#c3caff] text-center text-[10px] font-bold uppercase leading-3 tracking-widest text-[#0d1225] shadow-xl">
            Build<br />with<br />purpose
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-white/35 md:block">Scroll to explore</div>
    </section>
  )
}

export default Hero