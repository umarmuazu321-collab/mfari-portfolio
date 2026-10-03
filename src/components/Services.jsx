const services = [
  { number: '01', title: 'Frontend Development', description: 'Building clean, functional frontend interfaces with modern web technologies.' },
  { number: '02', title: 'Responsive Website Design', description: 'Creating websites that work smoothly across phones, tablets, laptops, and desktop screens.' },
  { number: '03', title: 'Business Websites', description: 'Creating professional websites that help businesses establish a strong online presence.' },
  { number: '04', title: 'UI Development', description: 'Turning designs and ideas into polished, accessible, and user-friendly web interfaces.' },
]

function Services() {
  return (
    <section id="services" className="section section-tinted">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-label">04 / Services</p>
          <div>
            <h2 className="section-title">From first idea to <em>polished interface.</em></h2>
            <p className="section-intro">I help turn ideas into responsive, modern, and user-friendly web experiences with a thoughtful focus on clarity and function.</p>
          </div>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.number} className="service-card">
              <span className="number">{service.number}</span>
              <span className="service-orbit" aria-hidden="true" />
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
