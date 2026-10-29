import { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import useActiveSection from '../hooks/useActiveSection';
import useLanguage from '../i18n/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';

const LINKS = [
  { id: 'sobre', key: 'about' },
  { id: 'projetos', key: 'projects' },
  { id: 'habilidades', key: 'skills' },
  { id: 'experiencia', key: 'experience' },
];

const SECTION_IDS = ['inicio', ...LINKS.map((l) => l.id), 'certificados', 'contato'];

export default function Navbar({ theme, toggleTheme }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  // Fecha o menu mobile com Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const ThemeIcon = theme === 'dark' ? FiSun : FiMoon;
  const themeLabel = theme === 'dark' ? t('theme.toLight') : t('theme.toDark');

  return (
    <header className="nav">
      <nav className="nav-pill" aria-label={t('nav.label')}>
        <a href="#inicio" className="nav-logo" aria-label={t('nav.home')} onClick={close}>
          LL
        </a>

        <div className="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link${active === l.id ? ' is-active' : ''}`}
              aria-current={active === l.id ? 'true' : undefined}
            >
              {t(`nav.${l.key}`)}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <LanguageSwitcher />
          <button className="icon-btn" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
            <ThemeIcon size={17} />
          </button>
          <a href="#contato" className="nav-cta">
            {t('nav.contact')} <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            className="icon-btn nav-menu-btn"
            aria-expanded={open}
            aria-controls="nav-panel"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={19} /> : <FiMenu size={19} />}
          </button>
        </div>
      </nav>

      {/* Painel do menu mobile */}
      <div id="nav-panel" className={`nav-panel${open ? ' is-open' : ''}`}>
        {LINKS.map((l, i) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`nav-panel-link${active === l.id ? ' is-active' : ''}`}
            onClick={close}
          >
            {t(`nav.${l.key}`)}
            <span>{String(i + 1).padStart(2, '0')}</span>
          </a>
        ))}
        <a href="#contato" className="btn btn-primary" onClick={close}>
          {t('nav.cta')} <FiArrowUpRight className="btn-arrow" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
