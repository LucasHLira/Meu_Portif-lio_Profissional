import { personalInfo } from '../data/resume';
import {
  FiCode,
  FiBarChart2,
  FiBookOpen,
  FiBriefcase,
  FiCloud,
  FiCheckCircle,
} from 'react-icons/fi';
import useCounter from '../hooks/useCounter';
import useLanguage from '../i18n/useLanguage';
import { trackSpotlight } from '../lib/spotlight';
import RichText from './RichText';
import PhotoGallery from './PhotoGallery';

const FOCUS_ICONS = [FiCode, FiBarChart2];

const NOW_ITEMS = [
  { key: 'job', Icon: FiBriefcase },
  { key: 'study', Icon: FiBookOpen },
  { key: 'cloud', Icon: FiCloud },
  { key: 'status', Icon: FiCheckCircle, isStatus: true },
];

function StatCard({ number, label }) {
  // Separa número e sufixo (ex.: "3+" → 3 e "+", "4º" → 4 e "º", "4th" → 4 e "th")
  const match = String(number).match(/^(\d+)(.*)$/);
  const numVal = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  const ref = useCounter(numVal, 1200);

  return (
    <div>
      <span className="stat-value">
        <span ref={ref}>0</span>
        {suffix && <span className="stat-suffix">{suffix}</span>}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function About() {
  const { t, tr } = useLanguage();

  return (
    <section id="sobre" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">
            <span className="eyebrow-index">01</span> {t('about.eyebrow')}
          </span>
          <h2 className="section-title">
            {t('about.title')} <em>{t('about.titleEm')}</em>
          </h2>
        </header>

        <div className="bento">
          <article className="card spotlight bento-bio reveal" onPointerMove={trackSpotlight}>
            <span className="card-label">{t('about.who')}</span>
            {tr(personalInfo.bio).map((paragraph, i) => (
              <p key={i}>
                <RichText text={paragraph} />
              </p>
            ))}
          </article>

          <PhotoGallery photos={personalInfo.photos} />

          <div className="card spotlight bento-stats reveal" onPointerMove={trackSpotlight}>
            <span className="card-label">{t('about.numbers')}</span>
            <div className="stats-grid">
              {/* key por índice: trocar o idioma não reinicia os contadores */}
              {t('about.stats').map((s, i) => (
                <StatCard key={i} number={s.number} label={s.label} />
              ))}
            </div>
          </div>

          <div
            className="card spotlight bento-focus reveal"
            style={{ '--d': '80ms' }}
            onPointerMove={trackSpotlight}
          >
            <span className="card-label">{t('about.focus')}</span>
            <ul className="focus-list">
              {t('about.focusItems').map(({ title, text }, i) => {
                const Icon = FOCUS_ICONS[i];
                return (
                  <li className="focus-item" key={i}>
                    <span className="focus-icon" aria-hidden="true"><Icon /></span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="card spotlight bento-now reveal"
            style={{ '--d': '160ms' }}
            onPointerMove={trackSpotlight}
          >
            <span className="card-label">{t('about.now')}</span>
            <ul className="now-list">
              {NOW_ITEMS.map(({ key, Icon, isStatus }) => (
                <li className={`now-item${isStatus ? ' is-status' : ''}`} key={key}>
                  <Icon aria-hidden="true" />
                  <span>
                    <RichText text={t(`about.nowItems.${key}`)} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
