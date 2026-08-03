import type { Language } from '@/content/site';
import { siteCopy } from '@/content/site';
import Link from 'next/link';
import styles from './SiteFooter.module.css';

export default function SiteFooter({
  language,
}: Readonly<{ language: Language }>): React.ReactElement {
  const text = siteCopy[language];

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>© {new Date().getFullYear()} Viktor Livar</span>
        <nav aria-label={language === 'uk' ? 'Додаткові посилання' : 'Additional links'}>
          <Link href={`/${language}/contact`}>{text.contact}</Link>
          <a href="https://viktorlivar.com" rel="external">
            {text.professionalWork}
          </a>
        </nav>
      </div>
    </footer>
  );
}
