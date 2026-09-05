import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import id from '../i18n/id.js';
import en from '../i18n/en.js';

const C = createContext(null);

export function PreferencesProvider({ children }) {
  const storedLanguage = localStorage.getItem('language');
  const storedTheme = localStorage.getItem('theme');
  const [language, setLanguage] = useState(storedLanguage || 'id');
  const [theme, setTheme] = useState(storedTheme || 'light');

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({ language, setLanguage, theme, setTheme, t: language === 'id' ? id : en }),
    [language, theme],
  );

  return <C.Provider value={value}>{children}</C.Provider>;
}

export const usePreferences = () => useContext(C);
