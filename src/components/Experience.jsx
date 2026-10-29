import { experiences } from '../data/resume';
import useLanguage from '../i18n/useLanguage';

// "2024-11" → "Nov/2024" (pt) ou "Nov 2024" (en/es); "2025" → "2025"
function formatDate(value, months, lang) {
  const [year, month] = value.split('-');
  if (!month) return year;
  const name = months[Number(month) - 1];
  return lang === 'pt' ? `${name}/${year}` : `${name} ${year}`;
}

export default function Experience() {
  const { t, tr, lang } = useLanguage();
  const months = t('experience.months');

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">
            <span className="eyebrow-index">04</span> {t('experience.eyebrow')}
          </span>
          <h2 className="section-title">
            {t('experience.title')} <em>{t('experience.titleEm')}</em>
          </h2>
        </header>

        <ol className="xp-list">
          {experiences.map((exp) => {
            const isCurrent = exp.end === null;
            const period = `${formatDate(exp.start, months, lang)} — ${
              isCurrent ? t('experience.present') : formatDate(exp.end, months, lang)
            }`;
            return (
              <li className="xp-item reveal" key={`${exp.company}-${exp.start}`}>
                <div className="xp-period">
                  <span>{period}</span>
                  {isCurrent && <span className="xp-current">{t('experience.current')}</span>}
                </div>
                <div>
                  <div className="xp-head">
                    <h3 className="xp-role">{tr(exp.role)}</h3>
                    <span className="xp-company">{exp.company}</span>
                  </div>
                  <p className="xp-desc">{tr(exp.description)}</p>
                  <ul className="tag-list" aria-label={t('experience.skillsLabel')}>
                    {exp.tech.map((tech) => {
                      const label = tr(tech);
                      return <li className="tag" key={label}>{label}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
