import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Vortech</h1>
      <p>Temporary placeholder. Stay tuned...</p>
      <Link href='/news'>Check news</Link>
    </main>
  );
}
