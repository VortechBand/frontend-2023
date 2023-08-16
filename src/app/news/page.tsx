import Link from 'next/link';
import styles from './page.module.css';

export default function News() {
  return (
    <div className={styles.page}>
      <h1>News</h1>
      <p>Get yer News here!</p>
      <Link href='/'>Or go back to the beginning</Link>
    </div>
  );
}
