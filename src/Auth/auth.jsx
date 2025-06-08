import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/styles.module.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className={styles.auth_main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={styles.auth_card}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
        >
          {isLogin ? 'Login to Portal' : 'Request Access'}
        </motion.h2>

        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.input 
                type="text" 
                placeholder="School Code" 
                className={styles.input}
                variants={itemVariants}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input 
                type="password" 
                placeholder="Password" 
                className={styles.input}
                variants={itemVariants}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.select 
                className={styles.select}
                variants={itemVariants}
                whileFocus={{ scale: 1.02 }}
              >
                <option>select mode</option>
                <option>Parent Login</option>
                <option>Admin Login</option>
              </motion.select>
              <motion.button 
                className={styles.primary_btn}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="register"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p 
                className={styles.info}
                variants={itemVariants}
              >
                To join Edu Track Malawi, please provide your school's basic information. We will contact you shortly.
              </motion.p>
              <motion.input 
                type="text" 
                placeholder="School Name" 
                className={styles.input}
                variants={itemVariants}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input 
                type="text" 
                placeholder="Location" 
                className={styles.input}
                variants={itemVariants}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input 
                type="text" 
                placeholder="Contact Person" 
                className={styles.input}
                variants={itemVariants}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input 
                type="email" 
                placeholder="Email Address" 
                className={styles.input}
                variants={itemVariants}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input 
                type="tel" 
                placeholder="Phone Number" 
                className={styles.input}
                variants={itemVariants}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea 
                placeholder="Message (optional)" 
                className={styles.textarea}
                variants={itemVariants}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button 
                className={styles.primary_btn}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Request
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className={styles.toggle}
          variants={itemVariants}
        >
          {isLogin ? (
            <p>
              Don't have access?{' '}
              <motion.span 
                onClick={() => setIsLogin(false)}
                whileHover={{ scale: 1.1 }}
                style={{ display: 'inline-block' }}
              >
                Request Access
              </motion.span>
            </p>
          ) : (
            <p>
              Already have access?{' '}
              <motion.span 
                onClick={() => setIsLogin(true)}
                whileHover={{ scale: 1.1 }}
                style={{ display: 'inline-block' }}
              >
                Login Here
              </motion.span>
            </p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Auth;
