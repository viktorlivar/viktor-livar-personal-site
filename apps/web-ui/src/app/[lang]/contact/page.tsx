import PageIntro from '@/components/PageIntro';
import { contacts, isLanguage, siteCopy } from '@/content/site';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import styles from '../section.module.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === 'uk' ? 'Контакти' : 'Contact' };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<React.ReactElement> {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const text = siteCopy[lang];

  return (
    <main id="main-content" className={styles.page}>
      <PageIntro title={text.contact} description={text.contactIntro} />
      <div className={styles.contactList}>
        {contacts.map((contact) => (
          <a className={styles.contactRow} href={contact.href} key={contact.label}>
            <small>{contact.label}</small>
            <span>{contact.value}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </main>
  );
}
