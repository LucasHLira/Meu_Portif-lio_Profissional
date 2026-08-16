import { personalInfo } from '../data/resume';
import { FiArrowRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Background effects */}
      <div className="hero-bg-grid" />
      <div className="hero-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>

      <div className="container">
        <div className="hero-content">
          <span className="hero-eyebrow">Olá, meu nome é</span>

          <h1 className="hero-name">{personalInfo.name}.</h1>

          <h2 className="hero-subtitle">
            Desenvolvedor de Software<br />& Analista de Dados.
          </h2>

          <p className="hero-description">
            Estudante de <span style={{ color: 'var(--clr-accent)' }}>ADS na UNIMES</span>,
            apaixonado por transformar dados em decisões e código em soluções reais.
            Atualmente focado em desenvolvimento web e análise de dados.
          </p>

          <div className="hero-actions">
            <a
              href="#projetos"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Projetos <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
