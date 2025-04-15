import { Link } from 'react-router-dom';
import styles from './styles/styles.module.css';

const Landing = () => {
  return (
    <div className={styles.main_div}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Edu Track Malawi</h1>
        <nav className={styles.nav}>
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>
          <Link to="/contactUs">Contact</Link>
          <Link className={styles.portal_link} to="/Auth">Portal</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <h2>Empowering Schools with Smart Technology</h2>
        <p>
          Track progress, manage assets, and boost performance—all through a modern, intuitive dashboard.
        </p>
        <Link to="/get-started">
          <button className={styles.cta}>Get Started</button>
        </Link>
      </section>

      <section id="features" className={styles.features}>
        <div className={styles.glassCard}>
          <h3>🎓 Student Dashboard</h3>
          <p>Monitor academic performance, attendance, and growth in real-time.</p>
        </div>
        <div className={styles.glassCard}>
          <h3>📦 Resource Tracking</h3>
          <p>Manage inventory like books, uniforms, and devices—smartly and efficiently.</p>
        </div>
        <div className={styles.glassCard}>
          <h3>📊 Data Insights</h3>
          <p>Visual reports that guide teachers and administrators to make better decisions.</p>
        </div>
        <div className={styles.glassCard}>
          <h3>👨‍🏫 Staff Records</h3>
          <p>Access and manage staff credentials, schedules, and performance reviews.</p>
        </div>
        <div className={styles.glassCard}>
          <h3>🛡️ Secure Login</h3>
          <p>Role-based access with bank-level encryption and local data safety.</p>
        </div>
      </section>

      <section className={styles.testimonial}>
        <blockquote>
          “Edu Track Malawi has completely transformed how we manage our school. Everything is organized, simple, and powerful.”
        </blockquote>
        <cite>— Head Teacher, Blantyre Primary</cite>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 Edu Track Malawi. Designed with love and logic.</p>
      </footer>
    </div>
  );
};

export default Landing;
