import { useState } from 'react'

const initialForm = { name: '', email: '', projectType: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setIsSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-header section-header-wide">
          <p className="section-label">05 / Contact</p>
          <div>
            <h2 className="section-title">Let&apos;s build something <em>great.</em></h2>
            <p className="section-intro">Get in touch if you have a website, frontend development, or web project in mind. I&apos;d be glad to hear what you&apos;re working on.</p>
          </div>
        </div>

        <div className="contact-layout">
          <div className="contact-panel">
            <div>
              <p className="contact-label">Get in touch</p>
              <div className="contact-links">
                <a href="mailto:umarmuazu321@gmail.com" className="contact-link"><span>Email</span><span>umarmuazu321@gmail.com</span></a>
                <a href="https://wa.me/2347072629819" target="_blank" rel="noreferrer" className="contact-link"><span>WhatsApp</span><span>07072629819</span></a>
                <a href="https://github.com/umarmuazu321-collab" target="_blank" rel="noreferrer" className="contact-link"><span>GitHub</span><span>umarmuazu321-collab</span></a>
              </div>
            </div>
            <p className="contact-footnote">Prefer a direct message? Use the email or WhatsApp links above.</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <label className="field">Name
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-control" />
              </label>
              <label className="field">Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-control" />
              </label>
            </div>
            <label className="field field-full">Project Type
              <select name="projectType" value={form.projectType} onChange={handleChange} required className="field-control">
                <option value="" disabled>Select a project type</option>
                <option value="website">Website</option>
                <option value="frontend">Frontend Development</option>
                <option value="web-project">Web Project</option>
              </select>
            </label>
            <label className="field field-full">Message
              <textarea name="message" value={form.message} onChange={handleChange} required rows="5" className="field-control" />
            </label>
            <div className="form-footer">
              <button type="submit" className="button button-primary">Send message <span className="arrow" aria-hidden="true">↗</span></button>
              {isSubmitted && <p className="form-status" role="status">Your message is ready, but no server submission is configured yet.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
