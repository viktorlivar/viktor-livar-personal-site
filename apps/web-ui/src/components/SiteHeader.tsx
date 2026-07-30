'use client';

import type { Language } from '@/content/site';
import { siteCopy } from '@/content/site';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePreferences } from './PreferencesProvider';
import Header from './Header';
import styles from './SiteHeader.module.css';

export default function SiteHeader({
  language,
}: Readonly<{ language: Language }>): React.ReactElement {
  const { theme, toggleTheme } = usePreferences();
  const pathname = usePathname();
  const text = siteCopy[language];
  const section = getSection(pathname);
  const sectionLabel = section ? text[section] : null;

  return (
    <Header className={styles.header}>
      <nav className={styles.nav} aria-label={text.mainNavigation}>
        <Link className={styles.navLink} href={`/${language}`}>
          <span>{text.home}</span>
          {sectionLabel && <span className={styles.currentSection}> / {sectionLabel}</span>}
        </Link>

        <div className={styles.controls}>
          <button
            className={styles.themeButton}
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? text.useLightTheme : text.useDarkTheme}
            title={theme === 'dark' ? text.useLightTheme : text.useDarkTheme}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
          </button>

          <div className={styles.languages} aria-label={text.language}>
            <LanguageLink language="uk" activeLanguage={language} pathname={pathname}>
              УКР
            </LanguageLink>
            <span className={styles.separator} aria-hidden="true" />
            <LanguageLink language="en" activeLanguage={language} pathname={pathname}>
              ENG
            </LanguageLink>
          </div>
        </div>

        <Link className={styles.navLink} href={`/${language}/contact`}>
          {text.contact}
        </Link>
      </nav>
    </Header>
  );
}

function LanguageLink({
  language,
  activeLanguage,
  pathname,
  children,
}: Readonly<{
  language: Language;
  activeLanguage: Language;
  pathname: string;
  children: React.ReactNode;
}>): React.ReactElement {
  const isActive = language === activeLanguage;
  const href = pathname.replace(/^\/(en|uk)(?=\/|$)/, `/${language}`);

  return (
    <Link
      className={styles.languageButton}
      data-active={isActive || undefined}
      href={href}
      hrefLang={language}
      aria-current={isActive ? 'page' : undefined}
      onClick={() => localStorage.setItem('viktor-livar-language', language)}
    >
      {children}
    </Link>
  );
}

function getSection(pathname: string): 'writing' | 'projects' | 'music' | null {
  const segment = pathname.split('/')[2];
  if (segment === 'writing' || segment === 'projects' || segment === 'music') return segment;
  return null;
}
