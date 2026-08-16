import { personalInfo } from '../data/resume';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <>
      {/* Sidebar Social (left) */}
      <div className="sidebar-social">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
          <MdEmail />
        </a>
      </div>

      {/* Sidebar Email (right) */}
      <div className="sidebar-email">
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-social">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
            <MdEmail />
          </a>
        </div>
        <p className="footer-copy">
          Desenvolvido por{' '}
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            Lucas Lira
          </a>
          {' '}· Inspirado em{' '}
          <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">
            Brittany Chiang
          </a>
        </p>
      </footer>
    </>
  );
}
