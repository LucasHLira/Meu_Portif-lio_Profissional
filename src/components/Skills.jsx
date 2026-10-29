import { skills } from '../data/resume';
import { getTechIcon } from '../data/techIcons';
import { FiCode, FiLayout, FiServer, FiBarChart2, FiTool } from 'react-icons/fi';
import useLanguage from '../i18n/useLanguage';
import { trackSpotlight } from '../lib/spotlight';

// Ordem pensada para o bento: dois cards largos em cima, três em baixo
const CATEGORIES = [
  { key: 'linguagem',   Icon: FiCode,      wide: true },
  { key: 'dados',       Icon: FiBarChart2, wide: true },
  { key: 'frontend',    Icon: FiLayout },
  { key: 'backend',     Icon: FiServer },
  { key: 'ferramentas', Icon: FiTool },
];

function getLevel(level) {
  if (level >= 80) return { key: 'advanced', steps: 3 };
  if (level >= 60) return { key: 'intermediate', steps: 2 };
  return { key: 'basic', steps: 1 };
}

export default function Skills() {
  const { t, tr } = useLanguage();

  return (
    <section id="habilidades" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">
            <span className="eyebrow-index">03</span> {t('skills.eyebrow')}
          </span>
          <div>
            <h2 className="section-title">
              {t('skills.title')} <em>{t('skills.titleEm')}</em>
            </h2>
            <p className="section-lead">{t('skills.lead')}</p>
          </div>
        </header>

        <div className="skills-grid">
          {CATEGORIES.map((cat, i) => {
            const catSkills = skills.filter((s) => s.category === cat.key);
            if (!catSkills.length) return null;
            return (
              <div
                key={cat.key}
                className={`card spotlight skill-card${cat.wide ? ' skill-card--wide' : ''} reveal`}
                style={{ '--d': `${(i % 3) * 70}ms` }}
                onPointerMove={trackSpotlight}
              >
                <div className="skill-card-head">
                  <span className="skill-card-icon" aria-hidden="true"><cat.Icon /></span>
                  <h3 className="skill-card-title">{t(`skills.categories.${cat.key}`)}</h3>
                  <span className="skill-card-count">
                    {String(catSkills.length).padStart(2, '0')}
                  </span>
                </div>

                <ul className="skill-list">
                  {catSkills.map((skill) => {
                    const name = tr(skill.name);
                    const Icon = getTechIcon(skill.icon ?? name);
                    const level = getLevel(skill.level);
                    return (
                      <li className="skill-row" key={skill.icon ?? name}>
                        <span className="skill-icon" aria-hidden="true"><Icon /></span>
                        <span className="skill-name">{name}</span>
                        <span className="skill-level">
                          <span className="skill-level-label">{t(`skills.levels.${level.key}`)}</span>
                          <span className="meter" aria-hidden="true">
                            {[1, 2, 3].map((step) => (
                              <i key={step} className={step <= level.steps ? 'on' : undefined} />
                            ))}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
