import HomeContent from '@/components/HomeContent';
import { isLanguage } from '@/content/site';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', uk: '/uk' },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<React.ReactElement> {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <HomeContent language={lang} />;
}
