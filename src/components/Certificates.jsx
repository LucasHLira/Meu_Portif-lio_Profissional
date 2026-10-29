import { certificates } from '../data/resume';
import { FiFileText, FiArrowUpRight, FiCloud } from 'react-icons/fi';
import useLanguage from '../i18n/useLanguage';
import { trackSpotlight } from '../lib/spotlight';

function CertPreview({ cert }) {
  if (cert.type === 'course') {
    return (
      <div className="cert-preview cert-preview--course" aria-hidden="true">
        <div className="course-badge">
          <FiCloud />
        </div>
        <span className="course-provider">Microsoft Azure</span>
      </div>
    );
  }

  if (cert.type === 'pdf') {
    return (
      <div className="cert-preview cert-preview--pdf" aria-hidden="true">
        <div className="cert-doc">
          <FiFileText />
          <span>PDF</span>
        </div>
      </div>
    );
  }

  return (
    <div className="cert-preview">
      <img src={cert.image} alt="" loading="lazy" />
    </div>
  );
}

export default function Certificates() {
  const { t, tr } = useLanguage();

  return (
    <section id="certificados" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">
            <span className="eyebrow-index">05</span> {t('certificates.eyebrow')}
          </span>
          <h2 className="section-title">
            {t('certificates.title')} <em>{t('certificates.titleEm')}</em>
          </h2>
        </header>

        <div className="certs-grid">
          {certificates.map((cert, i) => {
            const isCourse = cert.type === 'course';
            return (
              <a
                key={cert.id}
                href={tr(cert.link)}
                target="_blank"
                rel="noopener noreferrer"
                className={`cert-card spotlight${isCourse ? ' cert-card--featured' : ''} reveal`}
                style={{ '--d': `${i * 70}ms` }}
                onPointerMove={trackSpotlight}
              >
                <CertPreview cert={cert} />

                <div className="cert-body">
                  {cert.inProgress && (
                    <span className="cert-status">
                      <i aria-hidden="true" /> {t('certificates.inProgress')}
                    </span>
                  )}
                  <h3 className="cert-title">{tr(cert.title)}</h3>
                  <p className="cert-issuer">{tr(cert.issuer)}</p>
                  {cert.details && <p className="cert-details">{tr(cert.details)}</p>}
                  <span className="cert-open">
                    {isCourse ? t('certificates.viewCourse') : t('certificates.view')}
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
