import { useEffect, useState } from 'react'

const navigation = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const root = document.documentElement
    const previousScrollPadding = root.style.scrollPaddingTop
    root.style.scrollPaddingTop = '5.5rem'

    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: '-88px 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      root.style.scrollPaddingTop = previousScrollPadding
      observer.disconnect()
    }
  }, [])

  const handleNavigation = (event, id) => {
    event.preventDefault()
    setIsMenuOpen(false)
    setActiveSection(id)

    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d1225]/85 shadow-[0_6px_24px_rgba(0,0,0,0.2)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10" aria-label="Main navigation">
        <a href="#home" onClick={(event) => handleNavigation(event, 'home')} className="text-lg font-bold tracking-[-0.04em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d9cff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1225]">
          Mfari <span className="text-[#8d9cff]">WebDev</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => handleNavigation(event, id)}
              className={`relative py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d9cff] ${activeSection === id ? 'text-[#aeb8ff]' : 'text-white/65 hover:text-white'}`}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
              <span className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#8d9cff] transition-opacity ${activeSection === id ? 'opacity-100' : 'opacity-0'}`} />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#8d9cff] hover:text-[#aeb8ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d9cff] md:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-full bg-current transition-transform ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div id="mobile-navigation" className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-white/10 bg-[#0d1225] px-6 py-3 md:hidden`}>
        <div className="mx-auto flex max-w-7xl flex-col">
          {navigation.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => handleNavigation(event, id)}
              className={`border-b border-white/10 py-3.5 text-sm font-semibold last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d9cff] ${activeSection === id ? 'text-[#aeb8ff]' : 'text-white/70'}`}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar