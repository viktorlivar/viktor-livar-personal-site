import styles from './PageIntro.module.css';

export default function PageIntro({
  title,
  description,
}: Readonly<{ title: string; description: string }>): React.ReactElement {
  return (
    <header className={styles.intro}>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}
