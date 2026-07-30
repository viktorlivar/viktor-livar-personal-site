'use client';

import { csn } from '@/utils/class.utils';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const HIDE_THRESHOLD = 96;
const SCROLL_DELTA = 6;

export default function Header(props: HeaderProps): React.ReactElement {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);
        const delta = currentScrollY - lastScrollY.current;

        if (currentScrollY <= HIDE_THRESHOLD) setIsHidden(false);
        else if (delta > SCROLL_DELTA) setIsHidden(true);
        else if (delta < -SCROLL_DELTA) setIsHidden(false);

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    lastScrollY.current = Math.max(window.scrollY, 0);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={csn(styles.header, isHidden && styles.hidden, props.className)}
      onFocusCapture={() => setIsHidden(false)}
    >
      {props.children}
    </header>
  );
}
