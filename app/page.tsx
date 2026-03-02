import Header from '../components/Header';
import Gallery from '../components/Gallery';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <Gallery />
      <a href="https://abhi.work" target="_blank" rel="noreferrer">
        <div className={styles.credit}>Developed by Abhi Velaga</div>
      </a>
      <div className={styles.credit}>© 2022 Subhanjali Velaga</div>
    </div>
  );
}
