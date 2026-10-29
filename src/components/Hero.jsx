import { personalInfo } from '../data/resume';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import useLanguage from '../i18n/useLanguage';
import RichText from './RichText';

export default function Hero() {
  const { t, tr } = useLanguage();

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-intro hero-anim" style={{ '--d': '80ms' }}>
          <div className="hero-id">
            <img
              className="hero-avatar"
              src={personalInfo.avatarUrl}
              alt=""
              width="52"
              height="52"
            />
            <div>
              <p className="hero-name">{personalInfo.name}</p>
              <p className="hero-role">{tr(personalInfo.title)}</p>
            </div>
          </div>
          <span className="status-badge">
            <span className="status-dot" aria-hidden="true" />
            {t('hero.status')}
          </span>
        </div>

        {/* Cada linha sobe de dentro de uma máscara */}
        <h1 className="hero-title">
          <span className="line">
            <span className="line-inner" style={{ '--d': '180ms' }}>{t('hero.line1')}</span>
          </span>
          <span className="line">
            <span className="line-inner" style={{ '--d': '280ms' }}>
              {t('hero.line2')} <em className="marker">{t('hero.marker')}</em>
            </span>
          </span>
          <span className="line">
            <span className="line-inner" style={{ '--d': '380ms' }}>{t('hero.line3')}</span>
          </span>
        </h1>

        <div className="hero-row">
          <p className="hero-desc hero-anim" style={{ '--d': '600ms' }}>
            <RichText text={t('hero.desc')} />
          </p>

          <div className="hero-actions hero-anim" style={{ '--d': '700ms' }}>
            <a href="#projetos" className="btn btn-primary">
              {t('hero.ctaProjects')} <FiArrowRight className="btn-arrow-right" aria-hidden="true" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FiGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-icon"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>

        <dl className="hero-meta hero-anim" style={{ '--d': '850ms' }}>
          {t('hero.meta').map((m) => (
            <div className="hero-meta-item" key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
