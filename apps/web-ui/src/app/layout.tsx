import PreferencesProvider from '@/components/PreferencesProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import React from 'react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://viktorlivar.net'),
  openGraph: {
    type: 'website',
    url: 'https://viktorlivar.net/',
    title: 'Viktor Livar',
    siteName: 'Viktor Livar',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Viktor Livar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Viktor21663863',
    site: '@Viktor21663863',
    title: 'Viktor Livar',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://viktorlivar.net/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const JS_IS_ENABLED_CLASS = 'js-is-enabled';
const PREFERENCES_SCRIPT = `
  document.documentElement.classList.add('${JS_IS_ENABLED_CLASS}');
  try {
    const storedTheme = localStorage.getItem('viktor-livar-theme');
    const theme = storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const pathLanguage = location.pathname.split('/')[1];
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.documentElement.lang = pathLanguage === 'uk' ? 'uk' : 'en';
  } catch (_) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="js-flag" strategy="beforeInteractive">
          {PREFERENCES_SCRIPT}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
