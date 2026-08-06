'use client';

import type { Language } from '@/content/site';
import { useEffect } from 'react';

export default function LanguageSync({ language }: Readonly<{ language: Language }>): null {
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('viktor-livar-language', language);
  }, [language]);

  return null;
}
