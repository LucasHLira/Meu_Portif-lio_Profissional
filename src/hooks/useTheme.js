import { useState, useEffect } from 'react';

const STORAGE_KEY = 'portfolio-theme';
const THEME_COLORS = { dark: '#0a0a0b', light: '#f5f4ef' };

/**
 * Hook que gerencia dark/light mode.
 * O tema inicial já vem aplicado pelo script inline do index.html
 * (localStorage ou prefers-color-scheme), evitando flash de cor.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[theme]);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.add('theme-transitioning');
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Armazenamento indisponível (modo privado etc.) — segue só na sessão
    }
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 400); // Duração igual à da transição no CSS
  };

  return { theme, toggleTheme };
}
