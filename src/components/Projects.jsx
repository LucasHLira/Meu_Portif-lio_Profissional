import { useState } from 'react';
import { projects } from '../data/resume';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFolder,
  FaBriefcase,
  FaGraduationCap,
} from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className={`project-card reveal${project.featured ? ' featured' : ''}`}>
      <div className="project-card-header">
        <span className="project-folder-icon">
          <FaFolder aria-hidden="true" />
        </span>
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="Ver no GitHub"
              title="Ver no GitHub"
            >
              <FaGithub />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="Ver projeto ao vivo"
              title="Ver ao vivo"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((t) => (
          <span className="tech-tag" key={t}>{t}</span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--clr-accent)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginTop: 'var(--space-sm)',
            opacity: 0.8,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.8)}
        >
          <FaExternalLinkAlt size={12} /> Ver ao vivo
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('professional');

  const currentProjects =
    activeTab === 'professional' ? projects.professional : projects.academic;

  return (
    <section id="projetos" className="section">
      <div className="container">
        <h2 className="section-heading reveal">
          <span className="number">05.</span> Projetos
        </h2>

        {/* Tab switcher */}
        <div className="projects-tabs">
          <button
            id="tab-professional"
            className={`tab-btn${activeTab === 'professional' ? ' active' : ''}`}
            onClick={() => setActiveTab('professional')}
          >
            <FaBriefcase aria-hidden="true" /> Profissionais
          </button>
          <button
            id="tab-academic"
            className={`tab-btn${activeTab === 'academic' ? ' active' : ''}`}
            onClick={() => setActiveTab('academic')}
          >
            <FaGraduationCap aria-hidden="true" /> Acadêmicos
          </button>
        </div>

        {/* Description of tab */}
        <p style={{
          color: 'var(--clr-text-muted)',
          fontSize: '0.9rem',
          marginBottom: 'var(--space-xl)',
          fontFamily: 'var(--font-mono)',
        }}>
          {activeTab === 'professional'
            ? '// Projetos desenvolvidos para clientes e uso real'
            : '// Projetos de estudo, cursos e exercícios práticos'}
        </p>

        <div className="projects-grid">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
          <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.875rem', marginBottom: 'var(--space-md)' }}>
            Quer ver mais projetos?
          </p>
          <a
            href="https://github.com/LucasHLira"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <FaGithub /> Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
