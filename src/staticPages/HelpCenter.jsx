import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SearchIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  ChatIcon,
  DocumentIcon,
  AcademicCapIcon,
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  MailIcon,
  PhoneIcon
} from '@heroicons/react/outline';
import styles from './styles/shared.module.css';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: <AcademicCapIcon className={styles.icon} />,
      title: 'Getting Started',
      description: 'New to EduTrack? Start here for basic setup and tutorials.'
    },
    {
      icon: <ChartBarIcon className={styles.icon} />,
      title: 'Reports & Analytics',
      description: 'Learn how to generate and interpret various reports.'
    },
    {
      icon: <UsersIcon className={styles.icon} />,
      title: 'User Management',
      description: 'Manage student, parent, and staff accounts effectively.'
    },
    {
      icon: <CogIcon className={styles.icon} />,
      title: 'System Settings',
      description: 'Configure your school\'s system settings and preferences.'
    }
  ];

  const popularArticles = [
    {
      title: 'How to Set Up Your School Profile',
      views: '2.5k views',
      category: 'Getting Started'
    },
    {
      title: 'Generating Term Reports',
      views: '1.8k views',
      category: 'Reports'
    },
    {
      title: 'Managing Student Attendance',
      views: '1.5k views',
      category: 'Daily Tasks'
    },
    {
      title: 'Setting Up Parent Access',
      views: '1.2k views',
      category: 'User Management'
    }
  ];

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking the "Forgot Password" link on the login page. Follow the instructions sent to your registered email address.'
    },
    {
      question: 'Can I export reports to Excel?',
      answer: 'Yes, all reports can be exported to Excel, PDF, and CSV formats. Look for the export button at the top of any report page.'
    },
    {
      question: 'How do I add a new student?',
      answer: 'Navigate to Students > Add New Student. Fill in the required information and click Save. The system will automatically generate a student ID.'
    },
    {
      question: 'What browsers are supported?',
      answer: 'EduTrack works best on modern browsers like Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience.'
    }
  ];

  return (
    <motion.div
      className={styles.pageContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className={styles.heroSection}>
        <h1>How can we help you?</h1>
        <div className={`${styles.formGroup} ${styles.searchContainer}`} style={{ maxWidth: '600px', margin: '2rem auto' }}>
          <SearchIcon className={styles.icon} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search for help articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: '3rem' }}
          />
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div className={styles.card}>
            <BookOpenIcon className={styles.icon} />
            <h3>User Guide</h3>
          </div>
          <div className={styles.card}>
            <QuestionMarkCircleIcon className={styles.icon} />
            <h3>FAQs</h3>
          </div>
          <div className={styles.card}>
            <ChatIcon className={styles.icon} />
            <h3>Live Chat</h3>
          </div>
          <div className={styles.card}>
            <DocumentIcon className={styles.icon} />
            <h3>Documentation</h3>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2>Browse by Category</h2>
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category.icon}
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2>Popular Articles</h2>
        <div className={styles.grid}>
          {popularArticles.map((article, index) => (
            <motion.div
              key={article.title}
              className={styles.card}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <DocumentIcon className={styles.icon} />
              <h3>{article.title}</h3>
              <div style={{ marginTop: 'auto' }}>
                <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>{article.category}</span>
                <span style={{ color: '#6B7280', fontSize: '0.875rem', marginLeft: '1rem' }}>{article.views}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2>Still Need Help?</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <ChatIcon className={styles.icon} />
            <h3>Live Chat</h3>
            <p>Chat with our support team</p>
            <p style={{ color: '#4B5563', fontSize: '0.875rem' }}>Available 8 AM - 5 PM</p>
            <button className={styles.button}>Start Chat</button>
          </div>
          <div className={styles.card}>
            <MailIcon className={styles.icon} />
            <h3>Email Support</h3>
            <p>Get help via email</p>
            <p style={{ color: '#4B5563', fontSize: '0.875rem' }}>Response within 24 hours</p>
            <button className={styles.button}>Send Email</button>
          </div>
          <div className={styles.card}>
            <PhoneIcon className={styles.icon} />
            <h3>Phone Support</h3>
            <p>Call our support team</p>
            <p style={{ color: '#4B5563', fontSize: '0.875rem' }}>+265 1 234 5678</p>
            <button className={styles.button}>Call Now</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HelpCenter; 