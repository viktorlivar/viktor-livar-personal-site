import type { Language } from '@/content/site';
import { sectionCards, siteCopy } from '@/content/site';
import Image from 'next/image';
import Link from 'next/link';
import ToadLogo from './ToadLogo';
import styles from './HomeContent.module.css';

export default function HomeContent({
  language,
}: Readonly<{ language: Language }>): React.ReactElement {
  const text = siteCopy[language];

  return (
    <main id="main-content" className={styles.main}>
      <section className={styles.hero}>
        <h1 className="visually-hidden">Viktor Livar</h1>
        <div className={styles.toad}>
          <ToadLogo alt={text.toadAlt} />
        </div>
      </section>

      <section className={styles.sections} aria-labelledby="sections-title">
        <h2 id="sections-title" className="visually-hidden">
          {text.sections}
        </h2>
        <div className={styles.cards}>
          {sectionCards.map((section) => (
            <Link
              className={styles.card}
              href={`/${language}/${section.slug}`}
              key={section.slug}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={section.image}
                  alt=""
                  fill
                  sizes="(max-width: 680px) 100vw, 267px"
                />
              </div>
              <span>{text[section.slug]}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
