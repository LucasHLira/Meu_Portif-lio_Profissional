import { useState } from 'react';
import { projects, githubStats } from '../data/resume';
import { FiGithub, FiArrowUpRight, FiLock } from 'react-icons/fi';
import useLanguage from '../i18n/useLanguage';
import { trackSpotlight } from '../lib/spotlight';

const TABS = ['professional', 'academic', 'dashboard'];

/** Gerador pseudoaleatório determinístico: a mesma capa em todo render */
function seededRandom(seed) {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

/* ---------- Capas ilustradas (decorativas) ---------- */

function SiteCover({ url, title, variant }) {
  const domain = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  return (
    <div className="mock" data-variant={variant}>
      <div className="mock-bar">
        <i /><i /><i />
        <span className="mock-url">{domain}</span>
      </div>
      <div className="mock-body mock-site">
        <div className="mock-nav">
          <b />
          <span><i /><i /><i /></span>
        </div>
        <div className="mock-hero">
          <div>
            <p className="mock-headline">{title}</p>
            <span className="mock-cta" />
          </div>
        </div>
        <div className="mock-tiles"><i /><i /><i /></div>
      </div>
    </div>
  );
}

function DashboardCover({ seed, label }) {
  const rand = seededRandom(seed);
  const kpis = [
    Math.round(rand() * 9000 + 1000).toLocaleString('pt-BR'),
    `${Math.round(rand() * 35 + 60)}%`,
    `+${Math.round(rand() * 18 + 4)}%`,
  ];
  const bars = Array.from({ length: 10 }, () => Math.round(rand() * 65 + 30));
  const peak = bars.indexOf(Math.max(...bars));

  return (
    <div className="mock">
      <div className="mock-bar">
        <i /><i /><i />
        <span className="mock-url">{label}</span>
      </div>
      <div className="mock-body">
        <div className="mock-kpis">
          {kpis.map((value, i) => (
            <div className="mock-kpi" key={i}>
              <i />
              <b>{value}</b>
            </div>
          ))}
        </div>
        <div className="mock-chart">
          {bars.map((height, i) => (
            <i key={i} className={i === peak ? 'is-hi' : undefined} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CodeCover({ repo, seed }) {
  const rand = seededRandom(seed);
  const kinds = ['k', 'f', '', 's', ''];
  const lines = Array.from({ length: 10 }, () => ({
    indent: Math.floor(rand() * 3),
    tokens: Array.from({ length: 1 + Math.floor(rand() * 3) }, () => ({
      width: Math.round(rand() * 46 + 14),
      kind: kinds[Math.floor(rand() * kinds.length)],
    })),
  }));
  const repoName = repo.replace(/^https?:\/\/github\.com\//, '');

  return (
    <div className="mock">
      <div className="mock-bar">
        <i /><i /><i />
        <span className="mock-file">{repoName}</span>
      </div>
      <div className="mock-code">
        {lines.map((line, i) => (
          <div className="code-line" key={i} style={{ paddingLeft: line.indent * 12 }}>
            <em>{i + 1}</em>
            {line.tokens.map((tok, j) => (
              <i key={j} className={tok.kind || undefined} style={{ width: tok.width }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCover({ project, title, index }) {
  const { t } = useLanguage();

  let cover;
  if (project.category === 'dashboard') {
    cover = <DashboardCover seed={project.id} label={t('projects.dashboardCover')} />;
  } else if (project.link) {
    cover = <SiteCover url={project.link} title={title} variant={index % 3} />;
  } else {
    cover = <CodeCover repo={project.github} seed={project.id} />;
  }

  return (
    <div className="project-cover" aria-hidden="true">
      {cover}
    </div>
  );
}

/* ---------- Card ---------- */

function ProjectCard({ project, index }) {
  const { t, tr } = useLanguage();
  const title = tr(project.title);

  return (
    <article
      className="project-card spotlight reveal"
      style={{ '--d': `${index * 70}ms` }}
      onPointerMove={trackSpotlight}
    >
      <ProjectCover project={project} title={title} index={index} />

      <div className="project-body">
        <div className="project-meta">
          <span className="badge">{t(`projects.category.${project.category}`)}</span>
          <span>{t(`projects.type.${project.type}`)}</span>
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{tr(project.description)}</p>

        <ul className="tag-list" aria-label={t('projects.techLabel')}>
          {project.tech.map((tech) => {
            const label = tr(tech);
            return <li className="tag" key={label}>{label}</li>;
          })}
        </ul>

        <div className="project-actions">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {t('projects.live')} <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-arrow is-muted">
              <FiGithub aria-hidden="true" /> {t('projects.code')}
            </a>
          )}
          {project.private && (
            <span className="project-private">
              <FiLock aria-hidden="true" /> {t('projects.private')}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('professional');
  const currentProjects = projects[activeTab] || projects.professional;

  return (
    <section id="projetos" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">
            <span className="eyebrow-index">02</span> {t('projects.eyebrow')}
          </span>
          <div>
            <h2 className="section-title">
              {t('projects.title')} <em>{t('projects.titleEm')}</em>
            </h2>
            <p className="section-lead">{t('projects.lead')}</p>
          </div>
        </header>

        <div className="reveal">
          <div className="tabs" role="tablist" aria-label={t('projects.tabsLabel')}>
            {TABS.map((tab) => (
              <button
                key={tab}
                id={`tab-${tab}`}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls="projects-panel"
                className={`tab${activeTab === tab ? ' is-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {t(`projects.tabs.${tab}`)}
                <span className="tab-count">{projects[tab].length}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          id="projects-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="projects-grid"
        >
          {currentProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="projects-more reveal">
          <span>{t('projects.more', { n: githubStats.publicRepos })}</span>
          <a href={githubStats.profileUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
            {t('projects.moreLink')} <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
