import { useEffect, useState } from 'react';
import { personalInfo } from '../data/resume';
import { FiArrowUpRight, FiCopy, FiCheck, FiGithub, FiLinkedin } from 'react-icons/fi';
import useLanguage from '../i18n/useLanguage';

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
    } catch {
      // Sem acesso à área de transferência: abre o cliente de e-mail
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="contact-card reveal">
          <p className="contact-eyebrow">{t('contact.eyebrow')}</p>

          <h2 className="contact-title">
            {t('contact.title')} <em>{t('contact.titleEm')}</em>
          </h2>

          <p className="contact-desc">{t('contact.desc')}</p>

          <div className="contact-actions">
            <a href={`mailto:${personalInfo.email}`} className="btn btn-ink">
              {t('contact.send')} <FiArrowUpRight className="btn-arrow" aria-hidden="true" />
            </a>
            <button type="button" className="btn btn-ink-outline" onClick={copyEmail}>
              {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              {copied ? t('contact.copied') : t('contact.copy')}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? t('contact.copiedSr') : ''}
            </span>
          </div>

          <div className="contact-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <FiGithub aria-hidden="true" /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <span className="contact-link">{personalInfo.email}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
