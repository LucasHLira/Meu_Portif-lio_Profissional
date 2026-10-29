import { createContext, useContext } from 'react';

export const LANGUAGES = [
  { code: 'pt', short: 'PT', label: 'Português', htmlLang: 'pt-BR' },
  { code: 'en', short: 'EN', label: 'English', htmlLang: 'en' },
  { code: 'es', short: 'ES', label: 'Español', htmlLang: 'es' },
];

export const LanguageContext = createContext(null);

/**
 * useLanguage — { lang, setLang, t, tr }
 *   t('nav.about')            → texto da interface no idioma atual
 *   t('projects.more', { n }) → com variáveis {n}
 *   tr(valor)                 → resolve { pt, en, es } dos dados; strings passam direto
 */
export default function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage deve ser usado dentro de <LanguageProvider>');
  return ctx;
}
