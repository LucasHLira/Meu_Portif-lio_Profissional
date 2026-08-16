import { personalInfo } from '../data/resume';
import { FiChevronRight } from 'react-icons/fi';

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <h2 className="section-heading reveal">
          <span className="number">01.</span> Sobre Mim
        </h2>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Tenho 19 anos e estou cursando o{' '}
              <span className="accent">4º Semestre de Análise e Desenvolvimento de Sistemas
              na UNIMES</span> (Universidade Metropolitana de Santos). Já fiz parte do{' '}
              <span className="accent">BTP — Brasil Terminal Portuário</span>, onde atuei
              na área de TI, o que despertou minha paixão por tecnologia.
            </p>
            <p>
              Minha trajetória combina experiência prática em comércio exterior com uma
              transição consistente para a área de desenvolvimento de software — construindo
              projetos web reais com{' '}
              <span className="accent">JavaScript, Node.js e React</span>, além de análise de
              dados com <span className="accent">SQL, Power BI e Excel</span>.
            </p>
            <p>
              Sou uma pessoa analítica e curiosa, que acredita no aprendizado contínuo.
              Já desenvolvi projetos profissionais para clientes reais — desde landing pages
              a portfólios completos — todos publicados e online.
            </p>

            <div style={{ marginTop: 'var(--space-xl)' }}>
              <p style={{ color: 'var(--clr-text-muted)', marginBottom: 'var(--space-sm)', fontSize: '0.875rem' }}>
                Tecnologias que uso atualmente:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)', maxWidth: '340px' }}>
                {['JavaScript (ES6+)', 'Node.js & Express', 'React & Vite', 'SQL & Power BI', 'TypeScript', 'Git & GitHub'].map((tech) => (
                  <div
                    key={tech}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--clr-text-muted)',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <FiChevronRight
                      aria-hidden="true"
                      style={{ color: 'var(--clr-accent)', flexShrink: 0 }}
                    />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-img-wrapper reveal">
            <div className="about-img">
              <img
                src={personalInfo.avatarUrl}
                alt={`Foto de perfil de ${personalInfo.name}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)',
                  filter: 'grayscale(20%)',
                  transition: 'filter 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.filter = 'grayscale(0%)')}
                onMouseLeave={(e) => (e.target.style.filter = 'grayscale(20%)')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
