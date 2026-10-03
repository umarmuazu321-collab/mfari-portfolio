import profileImage from '../assets/profile.jpg'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Frontend / Web Development</p>
          <h1 className="hero-title">Mfari<br /><em>WebDev</em></h1>
          <p className="hero-role">Building clear, modern digital experiences.</p>
          <p className="hero-description">
            I&apos;m a frontend developer focused on responsive, user-friendly websites. I turn ideas into clean, functional experiences with a careful eye for performance, design, and usability.
          </p>
          <div className="button-row">
            <a href="#projects" className="button button-primary">View my work <span className="arrow" aria-hidden="true">↗</span></a>
            <a href="#contact" className="button button-ghost">Contact me <span className="arrow" aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-stamp">Built<br />with<br />purpose</div>
          <div className="portrait-frame">
            <img src={profileImage} alt="Mfari WebDev" />
          </div>
          <div className="hero-note">Thoughtful interfaces / useful experiences</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
