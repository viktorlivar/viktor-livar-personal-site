'use client';

import { csn } from '@/utils/class.utils';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './ProgressiveImage.module.css';

const FADE_DELAY_MS = 120;

interface ProgressiveImageProps extends ImageProps {
  containerClassName?: string;
  placeholderDataUrl: string;
}

function toCssPixels(value: ImageProps['width']): number | undefined {
  return value === undefined ? undefined : Number(value);
}

export default function ProgressiveImage({
  alt,
  className,
  containerClassName,
  fill,
  height,
  onLoad,
  placeholderDataUrl,
  width,
  ...imageProps
}: Readonly<ProgressiveImageProps>): React.ReactElement {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldFade, setShouldFade] = useState(false);
  const hasLoaded = useRef(false);
  const frameStyle = {
    '--image-placeholder': `url("${placeholderDataUrl}")`,
    height: fill ? undefined : toCssPixels(height),
    width: fill ? undefined : toCssPixels(width),
  } as CSSProperties;

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      if (!hasLoaded.current) setShouldFade(true);
    }, FADE_DELAY_MS);

    return () => window.clearTimeout(fadeTimer);
  }, []);

  return (
    <span
      className={csn(
        styles.frame,
        fill && styles.fill,
        shouldFade && styles.fade,
        isLoaded && styles.loaded,
        containerClassName,
      )}
      style={frameStyle}
    >
      <Image
        {...imageProps}
        alt={alt}
        className={className}
        fill={fill}
        height={height}
        width={width}
        onLoad={(event) => {
          hasLoaded.current = true;
          setIsLoaded(true);
          onLoad?.(event);
        }}
      />
    </span>
  );
}
