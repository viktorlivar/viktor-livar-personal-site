import styles from './PageIntro.module.css';

export default function PageIntro({ title }: Readonly<{ title: string }>): React.ReactElement {
  return (
    <header className={styles.intro}>
      <h1>{title}</h1>
    </header>
  );
}
