import PageIntro from '@/components/PageIntro';
import ProgressiveImage from '@/components/ProgressiveImage';
import { getImagePlaceholder } from '@/content/image-placeholders';
import { contacts, isLanguage, siteCopy } from '@/content/site';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import styles from './contact.module.css';

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
      <PageIntro title={text.contact} />
      <div className={styles.contactList}>
        {contacts.map((contact) => (
          <a
            className={styles.contactRow}
            href={contact.href}
            aria-label={`${contact.label}: ${contact.value}`}
            key={contact.label}
          >
            <ProgressiveImage
              containerClassName={styles.icon}
              src={contact.icon}
              width={32}
              height={32}
              placeholderDataUrl={getImagePlaceholder(contact.icon)}
              alt=""
            />
            <span>{contact.value}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
