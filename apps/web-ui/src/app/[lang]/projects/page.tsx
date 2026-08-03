import ContentCard from '@/components/ContentCard';
import PageIntro from '@/components/PageIntro';
import { isLanguage, projects, siteCopy } from '@/content/site';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import styles from '../section.module.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === 'uk' ? 'Проєкти' : 'Projects' };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<React.ReactElement> {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const text = siteCopy[lang];

  return (
    <main id="main-content" className={styles.page}>
      <PageIntro title={text.projects} />
      <div className={styles.grid}>
        {projects.map((project) => (
          <ContentCard
            href={project.href}
            image={project.image}
            title={project.name}
            description={project.description[lang]}
            action={text.visitProject}
            external
            key={project.name}
          />
        ))}
      </div>
    </main>
  );
}
