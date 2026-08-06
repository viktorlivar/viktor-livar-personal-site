'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

interface PreferencesContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

const THEME_STORAGE_KEY = 'viktor-livar-theme';

export default function PreferencesProvider({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const resolvedTheme = document.documentElement.dataset.theme;
    setTheme(resolvedTheme === 'dark' ? 'dark' : 'light');
  }, []);

  const toggleTheme = (): void => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  };

  return (
    <PreferencesContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences(): PreferencesContextValue {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error('usePreferences must be used inside PreferencesProvider');
  return context;
}
