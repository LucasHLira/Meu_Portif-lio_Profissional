import { useEffect, useRef, useState } from 'react';
import { FiGlobe, FiCheck } from 'react-icons/fi';
import useLanguage, { LANGUAGES } from '../i18n/useLanguage';

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const current = LANGUAGES.find((l) => l.code === lang);

  // Fecha ao clicar fora ou apertar Esc
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="lang" ref={rootRef}>
      <button
        type="button"
        className="lang-btn"
        aria-expanded={open}
        aria-controls="lang-menu"
        aria-label={`${t('lang.change')} — ${current.label}`}
        title={t('lang.change')}
        onClick={() => setOpen((v) => !v)}
      >
        <FiGlobe aria-hidden="true" />
        {current.short}
      </button>

      <div id="lang-menu" className={`lang-menu${open ? ' is-open' : ''}`}>
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            type="button"
            lang={l.htmlLang}
            className={`lang-option${l.code === lang ? ' is-active' : ''}`}
            aria-pressed={l.code === lang}
            onClick={() => {
              setLang(l.code);
              setOpen(false);
            }}
          >
            <span className="lang-code" aria-hidden="true">{l.short}</span>
            {l.label}
            {l.code === lang && <FiCheck aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  );
}
