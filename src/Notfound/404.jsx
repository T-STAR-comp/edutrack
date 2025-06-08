import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, ExclamationCircleIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import styles from './styles/styles.module.css';

const Notfound = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <motion.div 
        className={styles.notFoundCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className={styles.errorIcon}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <ExclamationCircleIcon className={styles.icon} />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          404
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={styles.subtitle}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Oops! The page you're looking for seems to have vanished into thin air.
        </motion.p>

        <div className={styles.buttonGroup}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/" className={styles.primaryButton}>
              <HomeIcon className={styles.buttonIcon} />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button 
              onClick={() => window.history.back()} 
              className={styles.secondaryButton}
            >
              <ArrowLeftIcon className={styles.buttonIcon} />
              Go Back
            </button>
          </motion.div>
        </div>

        <motion.div 
          className={styles.helpText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>Need help? <a href="/contact" className={styles.helpLink}>Contact Support</a></p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Notfound;
