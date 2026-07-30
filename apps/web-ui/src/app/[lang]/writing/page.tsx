import PageIntro from '@/components/PageIntro';
import { isLanguage, siteCopy, writings } from '@/content/site';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '../section.module.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === 'uk' ? 'Література' : 'Writing' };
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<React.ReactElement> {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const text = siteCopy[lang];

  return (
    <main id="main-content" className={styles.page}>
      <PageIntro title={text.writing} description={text.writingIntro} />
      <div className={styles.grid}>
        {writings.map((writing) => (
          <Link
            className={styles.card}
            href={`/${lang}/writing/${writing.slug}`}
            key={writing.slug}
          >
            <div className={styles.image}>
              <Image src={writing.image} alt="" fill sizes="(max-width: 680px) 100vw, 400px" />
            </div>
            <div className={styles.cardText} lang="uk">
              <h2>{writing.title}</h2>
              <p className={styles.meta}>{writing.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
