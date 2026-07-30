import { isLanguage, languages, siteCopy, writings } from '@/content/site';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './writing-detail.module.css';

export function generateStaticParams(): { lang: string; slug: string }[] {
  return languages.flatMap((lang) =>
    writings.map((writing) => ({ lang, slug: writing.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const writing = writings.find((item) => item.slug === slug);
  return writing ? { title: writing.title } : {};
}

export default async function WritingDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<React.ReactElement> {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) notFound();
  const writing = writings.find((item) => item.slug === slug);
  if (!writing) notFound();
  const text = siteCopy[lang];

  return (
    <main id="main-content" className={styles.page}>
      <Link className={styles.back} href={`/${lang}/writing`}>
        ← {text.backToWriting}
      </Link>

      <header className={styles.header} lang="uk">
        <p>{writing.type}</p>
        <h1>{writing.title}</h1>
      </header>

      <div className={styles.cover}>
        <Image
          src={writing.image}
          alt=""
          fill
          priority
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>

      <article className={styles.article} lang="uk">
        {/* Writing text intentionally left empty for the author. */}
      </article>
    </main>
  );
}
