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
    const sections = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-78px 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
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
      window.history.pushState(null, '', '#' + id)
    }
  }

  return (
    <header className={'site-header ' + (isMenuOpen ? 'is-menu-open' : '')}>
      <nav className="nav-wrap" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={(event) => handleNavigation(event, 'home')}>
          <span className="brand-mark" aria-hidden="true">M</span>
          Mfari <span className="brand-accent">WebDev</span>
        </a>

        <div className="nav-links">
          {navigation.map(({ label, id }) => (
            <a
              key={id}
              href={'#' + id}
              onClick={(event) => handleNavigation(event, id)}
              className={'nav-link ' + (activeSection === id ? 'is-active' : '')}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className={'menu-toggle ' + (isMenuOpen ? 'is-open' : '')}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="menu-lines" aria-hidden="true"><span /><span /><span /></span>
        </button>
      </nav>

      <div id="mobile-navigation" className={'mobile-menu ' + (isMenuOpen ? 'is-open' : '')}>
        {navigation.map(({ label, id }) => (
          <a
            key={id}
            href={'#' + id}
            onClick={(event) => handleNavigation(event, id)}
            className={'mobile-link ' + (activeSection === id ? 'is-active' : '')}
            aria-current={activeSection === id ? 'page' : undefined}
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Navbar
