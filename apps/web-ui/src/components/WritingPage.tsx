import { getImagePlaceholder } from '@/content/image-placeholders';
import type { Language, Writing } from '@/content/site';
import { siteCopy } from '@/content/site';
import Link from 'next/link';
import ProgressiveImage from './ProgressiveImage';
import styles from './WritingPage.module.css';

interface WritingPageProps {
  children: React.ReactNode;
  language: Language;
  writing: Writing;
}

export default function WritingPage({
  children,
  language,
  writing,
}: Readonly<WritingPageProps>): React.ReactElement {
  const text = siteCopy[language];

  return (
    <main id="main-content" className={styles.page}>
      <Link className={styles.back} href={`/${language}/writing`}>
        {text.backToWriting}
      </Link>

      <header className={styles.header} lang="uk">
        <p>{writing.type}</p>
        <h1>{writing.title}</h1>
      </header>

      <div className={styles.cover}>
        <ProgressiveImage
          src={writing.image}
          alt=""
          fill
          priority
          placeholderDataUrl={getImagePlaceholder(writing.image)}
          sizes="(max-width: 680px) 100vw, (min-width: 2200px) 1216px, 800px"
        />
      </div>

      <article className={styles.article} lang="uk">
        {children}
      </article>
    </main>
  );
}
