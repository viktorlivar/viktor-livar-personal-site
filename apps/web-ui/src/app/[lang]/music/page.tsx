import PageIntro from '@/components/PageIntro';
import { isLanguage, musicVideos, siteCopy } from '@/content/site';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import styles from '../section.module.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === 'uk' ? 'Музика' : 'Music' };
}

export default async function MusicPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<React.ReactElement> {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const text = siteCopy[lang];

  return (
    <main id="main-content" className={styles.page}>
      <PageIntro title={text.music} />
      <div className={styles.videoGrid}>
        {musicVideos.map((video) => (
          <div className={styles.video} key={video.id}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </main>
  );
}
