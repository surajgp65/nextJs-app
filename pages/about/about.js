import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h1 className={styles.title}>
        <a href="../"> About Page</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </main>
  );
}
