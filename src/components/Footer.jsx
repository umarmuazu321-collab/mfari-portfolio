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
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <a href="#home" className="brand"><span className="brand-mark" aria-hidden="true">M</span>Mfari <span className="brand-accent">WebDev</span></a>
            <p className="footer-copy">Frontend developer building modern, responsive, and user-friendly web experiences.</p>
          </div>

          <div>
            <p className="footer-title">Explore</p>
            <nav className="footer-links" aria-label="Footer navigation">
              {navigation.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
            </nav>
          </div>

          <div>
            <p className="footer-title">Connect</p>
            <div className="footer-links">
              <a href="mailto:umarmuazu321@gmail.com">umarmuazu321@gmail.com</a>
              <a href="https://wa.me/2347072629819" target="_blank" rel="noreferrer">WhatsApp: 07072629819</a>
              <a href="https://github.com/umarmuazu321-collab" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Mfari WebDev. All rights reserved.</p>
          <span className="footer-dot" aria-hidden="true" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
