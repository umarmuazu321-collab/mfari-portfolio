const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090d1d] px-6 py-16 text-white lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.9fr] md:gap-8">
          <div>
            <a href="#home" className="text-xl font-bold tracking-[-0.04em] transition-colors hover:text-[#aeb8ff]">Mfari <span className="text-[#8d9cff]">WebDev</span></a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">Frontend Developer building modern, responsive, and user-friendly web experiences.</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8d9cff]">Explore</p>
            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm" aria-label="Footer navigation">
              {navigation.map((link) => (
                <a key={link.href} href={link.href} className="w-fit text-white/55 transition-colors hover:text-white">{link.label}</a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8d9cff]">Connect</p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm">
              <a href="mailto:umarmuazu321@gmail.com" className="text-white/55 transition-colors hover:text-white">umarmuazu321@gmail.com</a>
              <a href="https://wa.me/2347072629819" target="_blank" rel="noreferrer" className="text-white/55 transition-colors hover:text-white">WhatsApp: 07072629819</a>
              <a href="https://github.com/umarmuazu321-collab" target="_blank" rel="noreferrer" className="text-white/55 transition-colors hover:text-white">GitHub</a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mfari WebDev. All rights reserved.</p>
          <span className="h-1.5 w-1.5 rounded-full bg-[#5865f2]" aria-hidden="true" />
        </div>
      </div>
    </footer>
  )
}

export default Footer