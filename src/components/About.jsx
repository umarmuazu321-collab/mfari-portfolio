function About() {
  const highlights = ['Modern Frontend', 'Responsive Design', 'Clean UI', 'User Experience']

  return (
    <section id="about" className="section section-light">
      <div className="section-inner about-grid">
        <div className="section-header">
          <p className="section-label">01 / About</p>
          <p className="section-intro">A considered approach to frontend development, where clarity and usability lead every decision.</p>
        </div>

        <div>
          <p className="body-copy">Thoughtful interfaces, built for real people.</p>
          <p className="body-copy">
            I&apos;m a passionate frontend developer focused on building modern, responsive, and user-friendly web experiences. I turn ideas into clean and functional websites using modern web technologies, with a strong focus on performance, design, and user experience.
          </p>
          <div className="highlight-row">
            {highlights.map((highlight) => (
              <div key={highlight} className="highlight"><i aria-hidden="true" /><span>{highlight}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
