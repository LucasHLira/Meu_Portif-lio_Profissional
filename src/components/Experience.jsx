import { experiences } from '../data/resume';

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container" style={{ maxWidth: 'var(--max-w-content)' }}>
        <h2 className="section-heading reveal">
          <span className="number">03.</span> Experiência
        </h2>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div className="exp-item reveal" key={i}>
              <div className="exp-period">{exp.period}</div>
              <div className="exp-content">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">@ {exp.company}</div>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-tech">
                  {exp.tech.map((t) => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
