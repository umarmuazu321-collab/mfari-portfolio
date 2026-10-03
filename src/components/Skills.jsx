const skillGroups = [
  { number: '01', title: 'Frontend', description: 'The building blocks behind clear, functional web experiences.', skills: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { number: '02', title: 'Styling', description: 'Flexible visual systems that stay polished across screen sizes.', skills: ['Tailwind CSS', 'Responsive Design', 'UI Development'] },
  { number: '03', title: 'Tools', description: 'A focused toolkit for writing, managing, and refining code.', skills: ['Git', 'GitHub', 'VS Code'] },
]

function Skills() {
  return (
    <section id="skills" className="section section-tinted">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-label">02 / Skills</p>
          <div>
            <h2 className="section-title">A solid foundation <em>for the web.</em></h2>
            <p className="section-intro">I work with modern frontend technologies to create responsive, clean, and user-friendly interfaces that make digital experiences feel simple and purposeful.</p>
          </div>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <span className="skill-icon" aria-hidden="true" />
              <span className="number">{group.number}</span>
              <h3 className="card-title">{group.title}</h3>
              <p className="card-description">{group.description}</p>
              <ul className="skill-list" aria-label={group.title + ' skills'}>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
