import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  projectType: '',
  message: '',
}

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
    <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#0d1225] px-6 py-24 text-white lg:px-10 lg:py-32">
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#5865f2]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#8d9cff]">
            <span className="h-px w-8 bg-[#8d9cff]" /> 05 / CONTACT
          </p>
          <h2 className="mt-7 text-4xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">Let&apos;s build something great.</h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Get in touch if you have a website, frontend development, or web project in mind. I&apos;d be glad to hear what you&apos;re working on.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.03] p-6 sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Get in touch</p>
              <div className="mt-7 space-y-5">
                <a href="mailto:umarmuazu321@gmail.com" className="group block border-b border-white/10 pb-5 transition-colors hover:border-[#8d9cff]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#8d9cff]">Email</span>
                  <span className="mt-2 block break-all text-sm font-medium text-white/80 group-hover:text-white">umarmuazu321@gmail.com</span>
                </a>
                <a href="https://wa.me/2347072629819" target="_blank" rel="noreferrer" className="group block border-b border-white/10 pb-5 transition-colors hover:border-[#8d9cff]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#8d9cff]">WhatsApp</span>
                  <span className="mt-2 block text-sm font-medium text-white/80 group-hover:text-white">07072629819</span>
                </a>
                <a href="https://github.com/umarmuazu321-collab" target="_blank" rel="noreferrer" className="group block transition-colors hover:text-white">
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#8d9cff]">GitHub</span>
                  <span className="mt-2 block text-sm font-medium text-white/80 group-hover:text-white">umarmuazu321-collab</span>
                </a>
              </div>
            </div>
            <p className="mt-12 text-sm leading-6 text-white/40">Prefer a direct message? Use the email or WhatsApp links above.</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/12 bg-white/[0.03] p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-sm font-medium text-white/75">
                Name
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="mt-2 w-full rounded-lg border border-white/15 bg-[#10172f] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#8d9cff] focus:ring-2 focus:ring-[#5865f2]/25" />
              </label>
              <label className="text-sm font-medium text-white/75">
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-lg border border-white/15 bg-[#10172f] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#8d9cff] focus:ring-2 focus:ring-[#5865f2]/25" />
              </label>
            </div>
            <label className="mt-6 block text-sm font-medium text-white/75">
              Project Type
              <select name="projectType" value={form.projectType} onChange={handleChange} required className="mt-2 w-full rounded-lg border border-white/15 bg-[#10172f] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#8d9cff] focus:ring-2 focus:ring-[#5865f2]/25">
                <option value="" disabled>Select a project type</option>
                <option value="website">Website</option>
                <option value="frontend">Frontend Development</option>
                <option value="web-project">Web Project</option>
              </select>
            </label>
            <label className="mt-6 block text-sm font-medium text-white/75">
              Message
              <textarea name="message" value={form.message} onChange={handleChange} required rows="5" className="mt-2 w-full resize-y rounded-lg border border-white/15 bg-[#10172f] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#8d9cff] focus:ring-2 focus:ring-[#5865f2]/25" />
            </label>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="rounded-full bg-[#5865f2] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#6975ff] focus:outline-none focus:ring-2 focus:ring-[#aeb8ff] focus:ring-offset-2 focus:ring-offset-[#0d1225]">Send Message</button>
              {isSubmitted && <p className="text-sm leading-6 text-[#aeb8ff]" role="status">Your message is ready, but no server submission is configured yet.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact