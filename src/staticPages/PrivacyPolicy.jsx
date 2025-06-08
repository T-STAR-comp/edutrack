import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  DocumentIcon
} from '@heroicons/react/outline';
import styles from './styles/shared.module.css';

const PrivacyPolicy = () => {
  const lastUpdated = 'March 15, 2024';

  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal Information: Names, contact details, and identification information of students, parents, and staff.',
        'Academic Data: Student grades, attendance records, and performance metrics.',
        'System Usage Data: Login times, feature usage, and interaction patterns.',
        'Technical Data: IP addresses, browser type, and device information.'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and maintain the EduTrack platform',
        'To generate academic reports and analytics',
        'To communicate with users about system updates and features',
        'To improve our services and user experience',
        'To comply with legal obligations and educational regulations'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'Implementation of industry-standard encryption protocols',
        'Regular security audits and vulnerability assessments',
        'Strict access controls and user authentication',
        'Secure data backup and recovery procedures',
        'Regular staff training on data protection'
      ]
    },
    {
      title: 'Data Sharing and Disclosure',
      content: [
        'We only share data with authorized school administrators',
        'Third-party service providers are bound by strict confidentiality agreements',
        'We never sell personal information to advertisers or marketers',
        'Data may be shared if required by law or court order'
      ]
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
        <ShieldCheckIcon className={styles.icon} style={{ width: '4rem', height: '4rem', marginBottom: '2rem' }} />
        <h1>Privacy Policy</h1>
        <p>Last Updated: {lastUpdated}</p>
      </section>

      <section className={styles.contentSection}>
        <p>
          At EduTrack Malawi, we take your privacy seriously. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our educational management platform.
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy
          policy, please do not access the platform.
        </p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <LockClosedIcon className={styles.icon} />
            <h3>Data Protection</h3>
            <p>Your data is encrypted and stored securely</p>
          </div>
          <div className={styles.card}>
            <DocumentIcon className={styles.icon} />
            <h3>Transparency</h3>
            <p>Clear information about data usage</p>
          </div>
          <div className={styles.card}>
            <ShieldCheckIcon className={styles.icon} />
            <h3>User Control</h3>
            <p>Control over your personal information</p>
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          className={styles.contentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h2>{section.title}</h2>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
            {section.content.map((item, i) => (
              <li key={i} style={{ color: '#4B5563', marginBottom: '0.5rem' }}>{item}</li>
            ))}
          </ul>
        </motion.section>
      ))}

      <section className={styles.contentSection}>
        <h2>Your Data Rights</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Access</h3>
            <p>You have the right to access your personal data</p>
          </div>
          <div className={styles.card}>
            <h3>Correction</h3>
            <p>Request correction of inaccurate data</p>
          </div>
          <div className={styles.card}>
            <h3>Deletion</h3>
            <p>Request deletion of your data</p>
          </div>
          <div className={styles.card}>
            <h3>Portability</h3>
            <p>Receive and transfer your data</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact our
          Data Protection Officer:
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <p>Email: privacy@edutrackmalawi.com</p>
          <p>Phone: +265 1 234 5678</p>
          <p>Address: Victoria Avenue, Blantyre, Malawi</p>
        </div>
      </section>

      <section className={styles.updates}>
        <h2>Policy Updates</h2>
        <p>
          We may update this privacy policy from time to time. The updated version will be indicated by an
          updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
          We encourage you to review this privacy policy frequently to be informed of how we are protecting
          your information.
        </p>
      </section>

      <section className={styles.consent}>
        <h2>Your Consent</h2>
        <p>
          By using our platform, you consent to our Privacy Policy and agree to its terms. If you do not
          agree with this policy, please do not use our platform. Your continued use of the platform
          following the posting of changes to this policy will be deemed your acceptance of those changes.
        </p>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy; 