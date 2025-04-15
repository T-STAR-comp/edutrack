import { Link } from 'react-router-dom';
import styles from './styles/styles.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactMain}>
      <div className={styles.contactHero}>
        <h1>Let’s Talk.</h1>
        <p>We’re here for you — whether you have a question, suggestion, or just want to say hi.</p>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.contactInfoCard}>
          <h2>Contact Details</h2>
          <p><strong>Email:</strong> hello@edutrack.mw</p>
          <p><strong>Phone:</strong> +265 999 000 123</p>
          <p><strong>Address:</strong> Blantyre City, Malawi</p>
          <p><strong>Support:</strong> Mon - Fri, 8am - 5pm</p>
        </div>

        <form className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <input required type="text" />
            <label>Your Name</label>
          </div>
          <div className={styles.inputGroup}>
            <input required type="email" />
            <label>Your Email</label>
          </div>
          <div className={styles.inputGroup}>
            <textarea required rows="4"></textarea>
            <label>Your Message</label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>

      <Link to="/" className={styles.returnHome}>
        ← Return to Home
      </Link>
    </div>
  );
};

export default ContactPage;
