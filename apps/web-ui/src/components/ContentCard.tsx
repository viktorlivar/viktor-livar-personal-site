import { getImagePlaceholder } from '@/content/image-placeholders';
import Link from 'next/link';
import ProgressiveImage from './ProgressiveImage';
import styles from './ContentCard.module.css';

interface ContentCardProps {
  href: string;
  image: string;
  title: string;
  meta?: string;
  description?: string;
  action?: string;
  contentLanguage?: string;
  external?: boolean;
}

export default function ContentCard({
  href,
  image,
  title,
  meta,
  description,
  action,
  contentLanguage,
  external = false,
}: Readonly<ContentCardProps>): React.ReactElement {
  const content = (
    <>
      <div className={styles.image}>
        <ProgressiveImage
          src={image}
          alt=""
          fill
          placeholderDataUrl={getImagePlaceholder(image)}
          sizes="(max-width: 680px) 100vw, 400px"
        />
        {action && <span className={styles.action}>{action}</span>}
      </div>
      <div className={styles.text} lang={contentLanguage}>
        <h2>{title}</h2>
        {meta && <p className={styles.meta}>{meta}</p>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </>
  );

  if (external) {
    return (
      <a className={styles.card} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={styles.card} href={href}>
      {content}
    </Link>
  );
}
