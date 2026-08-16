import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Certificados', href: '#certificados' },
    { label: 'Projetos', href: '#projetos' },
  ];

  const handleNavClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ThemeIcon = theme === 'dark' ? HiSun : HiMoon;
  const themeLabel = theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro';

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="navbar-logo">LL.</a>

          {/* Desktop links */}
          <div className="navbar-links">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="navbar-cta"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contato'); }}
            >
              Contato
            </a>

            {/* Theme toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={themeLabel}
              title={themeLabel}
            >
              <ThemeIcon size={18} />
            </button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="mobile-actions">
            <button
              className="theme-toggle navbar-hamburger"
              onClick={toggleTheme}
              aria-label={themeLabel}
              style={{ border: 'none', padding: '0.4rem' }}
            >
              <ThemeIcon size={18} />
            </button>
            <button
              className="navbar-hamburger"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-nav-overlay${mobileOpen ? ' open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile nav */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contato"
          className="btn btn-primary"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contato'); }}
        >
          Contato
        </a>
        <a
          href="https://github.com/LucasHLira"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </>
  );
}
