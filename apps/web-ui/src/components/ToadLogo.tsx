'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './ToadLogo.module.css';

const MAX_EYE_OFFSET = 18;
const POINTER_DEAD_ZONE = 42;

interface Point {
  x: number;
  y: number;
}

export default function ToadLogo({ alt }: Readonly<{ alt: string }>): React.ReactElement {
  const leftEyeRef = useRef<HTMLSpanElement>(null);
  const rightEyeRef = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const pointerRef = useRef<Point | null>(null);

  useEffect(() => {
    const updateEyes = (): void => {
      const pointer = pointerRef.current;
      const eyes = [leftEyeRef.current, rightEyeRef.current];

      eyes.forEach((eye) => {
        if (!eye) return;
        const position = pointer ? getEyeOffset(eye, pointer) : { x: 0, y: 0 };
        eye.style.setProperty('--eye-x', `${position.x}px`);
        eye.style.setProperty('--eye-y', `${position.y}px`);
      });

      animationFrameRef.current = null;
    };

    const scheduleUpdate = (): void => {
      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(updateEyes);
      }
    };

    const handlePointerMove = (event: PointerEvent): void => {
      if (event.pointerType === 'touch') return;
      pointerRef.current = { x: event.clientX, y: event.clientY };
      scheduleUpdate();
    };

    const resetEyes = (): void => {
      pointerRef.current = null;
      scheduleUpdate();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', resetEyes);
    window.addEventListener('blur', resetEyes);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('pointerleave', resetEyes);
      window.removeEventListener('blur', resetEyes);
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.desktopToad}>
        <div className={styles.shadow} aria-hidden="true" />
        <Image
          className={styles.image}
          src="/images/logo-toad.svg"
          width={794}
          height={594}
          priority
          alt={alt}
        />
        <div className={styles.eyes} aria-hidden="true">
          <span ref={leftEyeRef} className={`${styles.eye} ${styles.leftEye}`} />
          <span ref={rightEyeRef} className={`${styles.eye} ${styles.rightEye}`} />
        </div>
      </div>

      <div className={styles.mobileToad}>
        <div className={styles.shadow} aria-hidden="true" />
        <Image
          className={styles.image}
          src="/images/logo-toad-mobile.svg"
          width={794}
          height={594}
          priority
          alt={alt}
        />
      </div>
    </div>
  );
}

function getEyeOffset(eye: HTMLElement, pointer: Point): Point {
  const bounds = eye.getBoundingClientRect();
  const deltaX = pointer.x - (bounds.left + bounds.width / 2);
  const deltaY = pointer.y - (bounds.top + bounds.height / 2);
  const distance = Math.hypot(deltaX, deltaY);

  if (distance < POINTER_DEAD_ZONE) return { x: 0, y: 0 };

  return {
    x: (deltaX / distance) * MAX_EYE_OFFSET,
    y: (deltaY / distance) * MAX_EYE_OFFSET,
  };
}
