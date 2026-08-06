import ContentCard from '@/components/ContentCard';
import PageIntro from '@/components/PageIntro';
import { isLanguage, siteCopy, writings } from '@/content/site';
import type { Metadata } from 'next';
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
      <PageIntro title={text.writing} />
      <div className={styles.grid}>
        {writings.map((writing) => (
          <ContentCard
            href={`/${lang}/writing/${writing.slug}`}
            image={writing.image}
            title={writing.title}
            meta={writing.type}
            contentLanguage="uk"
            key={writing.slug}
          />
        ))}
      </div>
    </main>
  );
}
