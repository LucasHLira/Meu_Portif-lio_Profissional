import { useCallback, useEffect, useMemo, useState } from 'react';
import { LanguageContext, LANGUAGES } from './useLanguage';
import { translations } from './translations';

const STORAGE_KEY = 'portfolio-lang';
const isSupported = (code) => LANGUAGES.some((l) => l.code === code);

// Preferência salva > idioma do navegador > português
function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isSupported(saved)) return saved;
  } catch {
    // Armazenamento indisponível — segue para o idioma do navegador
  }
  const browser = (navigator.language || 'pt').slice(0, 2).toLowerCase();
  return isSupported(browser) ? browser : 'pt';
}

const resolvePath = (obj, path) => path.split('.').reduce((acc, key) => acc?.[key], obj);

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLanguage);

  useEffect(() => {
    const { htmlLang } = LANGUAGES.find((l) => l.code === lang);
    document.documentElement.lang = htmlLang;
    document.title = translations[lang].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', translations[lang].meta.description);
  }, [lang]);

  const setLang = useCallback((code) => {
    if (!isSupported(code)) return;
    setLangState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Sem armazenamento: o idioma vale só nesta sessão
    }
  }, []);

  const value = useMemo(() => {
    const t = (key, vars) => {
      let text = resolvePath(translations[lang], key) ?? resolvePath(translations.pt, key) ?? key;
      if (vars && typeof text === 'string') {
        text = text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? vars[name] : match));
      }
      return text;
    };

    const tr = (field) =>
      field && typeof field === 'object' && !Array.isArray(field) ? field[lang] ?? field.pt : field;

    return { lang, setLang, t, tr };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
