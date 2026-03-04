import Header from '@/components/Header';
import RevealProvider from '@/components/RevealProvider';
import styles from './page.module.css';

export default function Home(): React.ReactElement {
  return (
    <div className={styles.page}>
      <RevealProvider>
        <Header className={styles.header}>
          <div className={styles['header-content']}>
            <div className={styles['header-title-container']}>
              {/* <h3>Viktor Livar</h3> */}
            </div>
          </div>
        </Header>

        <main className={styles.main} data-reveal>
          {''}
        </main>
      </RevealProvider>
    </div>
  );
}
