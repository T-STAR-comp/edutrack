import { useState } from 'react';
import styles from './styles/styles.module.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.auth_main}>
      <div className={styles.auth_card}>
        <h2>{isLogin ? 'Login to Portal' : 'Request Access'}</h2>

        {isLogin ? (
          <>
            <input type="text" placeholder="School Code" className={styles.input} />
            <input type="password" placeholder="Password" className={styles.input} />
            <select className={styles.select}>
              <option>User Login</option>
              <option>Admin Login</option>
            </select>
            <button className={styles.primary_btn}>Login</button>
          </>
        ) : (
          <>
            <p className={styles.info}>
              To join Edu Track Malawi, please provide your school’s basic information. We will contact you shortly.
            </p>
            <input type="text" placeholder="School Name" className={styles.input} />
            <input type="text" placeholder="Location" className={styles.input} />
            <input type="text" placeholder="Contact Person" className={styles.input} />
            <input type="email" placeholder="Email Address" className={styles.input} />
            <input type="tel" placeholder="Phone Number" className={styles.input} />
            <textarea placeholder="Message (optional)" className={styles.textarea}></textarea>
            <button className={styles.primary_btn}>Send Request</button>
          </>
        )}

        <div className={styles.toggle}>
          {isLogin ? (
            <p>Don't have access? <span onClick={() => setIsLogin(false)}>Request Access</span></p>
          ) : (
            <p>Already have access? <span onClick={() => setIsLogin(true)}>Login Here</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
