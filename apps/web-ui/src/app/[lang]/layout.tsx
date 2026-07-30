import LanguageSync from '@/components/LanguageSync';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { isLanguage, languages } from '@/content/site';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateStaticParams(): { lang: string }[] {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { other: { 'content-language': lang } };
}

export default async function LanguageLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>): Promise<React.ReactElement> {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  return (
    <>
      <LanguageSync language={lang} />
      <SiteHeader language={lang} />
      {children}
      <SiteFooter language={lang} />
    </>
  );
}
