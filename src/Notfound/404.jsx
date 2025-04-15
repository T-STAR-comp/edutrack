import { Link } from 'react-router-dom';
import styles from './styles/styles.module.css';

const Notfound = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.notFoundCard}>
        <h1>404</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <Link to="/" className={styles.notFoundLink}>
          ← Return Home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
