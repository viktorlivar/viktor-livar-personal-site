import PageIntro from '@/components/PageIntro';
import { isLanguage, projects, siteCopy } from '@/content/site';
import type { Metadata } from 'next';
import Image from 'next/image';
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
      <PageIntro title={text.projects} description={text.projectsIntro} />
      <div className={styles.grid}>
        {projects.map((project) => (
          <a
            className={styles.card}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            key={project.name}
          >
            <div className={styles.image}>
              <Image src={project.image} alt="" fill sizes="(max-width: 680px) 100vw, 400px" />
            </div>
            <div className={styles.cardText}>
              <h2>{project.name}</h2>
              <p className={styles.description}>{project.description[lang]}</p>
              <span className={styles.action}>{text.visitProject} ↗</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
