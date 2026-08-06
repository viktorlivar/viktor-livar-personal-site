import Link from 'next/link';
import styles from './page.module.css';

const LANGUAGE_REDIRECT_SCRIPT = `
  try {
    const stored = localStorage.getItem('viktor-livar-language');
    const preferred = stored === 'uk' || stored === 'en'
      ? stored
      : (navigator.language.toLowerCase().startsWith('uk') ? 'uk' : 'en');
    location.replace('/' + preferred + '/');
  } catch (_) {
    location.replace('/en/');
  }
`;

export default function RootPage(): React.ReactElement {
  return (
    <main className={styles.languagePage}>
      <script dangerouslySetInnerHTML={{ __html: LANGUAGE_REDIRECT_SCRIPT }} />
      <h1>Viktor Livar</h1>
      <nav aria-label="Choose language">
        <Link href="/en/" hrefLang="en">
          English
        </Link>
        <Link href="/uk/" hrefLang="uk">
          Українська
        </Link>
      </nav>
    </main>
  );
}
