import { personalInfo } from '../data/resume';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import useLanguage from '../i18n/useLanguage';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Lucas Henrique Lira · {t('footer.built')}</p>

        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label={t('footer.email')}>
            <FiMail />
          </a>
          <a href="#inicio" className="to-top" aria-label={t('footer.top')}>
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
