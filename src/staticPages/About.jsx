import React from 'react';
import { motion } from 'framer-motion';
import { 
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
  UsersIcon,
  AcademicCapIcon,
  ChartBarIcon
} from '@heroicons/react/outline';
import styles from './styles/shared.module.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Banda',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      bio: 'Former educator with 15 years of experience in Malawian education system.'
    },
    {
      name: 'John Phiri',
      role: 'Chief Technology Officer',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      bio: 'Tech veteran with experience in educational software development.'
    },
    {
      name: 'Grace Mhango',
      role: 'Head of Operations',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      bio: 'Operations specialist focused on educational institution management.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'EduTrack Malawi founded in Blantyre' },
    { year: '2021', event: 'Launched first version of the platform' },
    { year: '2022', event: 'Reached 25 schools milestone' },
    { year: '2023', event: 'Expanded to all major cities in Malawi' },
    { year: '2024', event: 'Serving 50+ schools and 10,000+ students' }
  ];

  return (
    <motion.div 
      className={styles.pageContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className={styles.heroSection}>
        <h1>About EduTrack Malawi</h1>
        <p>Transforming Education Through Technology</p>
      </section>

      <section className={styles.contentSection}>
        <h2>Our Story</h2>
        <p>Founded in 2020 in Blantyre, EduTrack Malawi emerged from a vision to revolutionize educational management in Malawi. We recognized the challenges faced by schools in managing student data, tracking performance, and maintaining efficient communication with parents.</p>
        <p>Today, we're proud to serve over 50 schools across Malawi, helping them streamline their operations and improve educational outcomes for more than 10,000 students.</p>
      </section>

      <section className={styles.grid}>
        {teamMembers.map((member, index) => (
          <motion.div 
            key={member.name}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={member.image} alt={member.name} style={{ borderRadius: '50%', width: '120px', height: '120px', marginBottom: '1rem' }} />
            <h3>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p>{member.bio}</p>
          </motion.div>
        ))}
      </section>

      <section className={styles.contentSection}>
        <h2>Our Journey</h2>
        <div className={styles.grid}>
          {milestones.map((milestone, index) => (
            <motion.div 
              key={milestone.year}
              className={styles.card}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>{milestone.year}</h3>
              <p>{milestone.event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2>Visit Us</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <LocationMarkerIcon className={styles.icon} />
            <p>Victoria Avenue, Blantyre, Malawi</p>
          </div>
          <div className={styles.card}>
            <PhoneIcon className={styles.icon} />
            <p>+265 1 234 5678</p>
          </div>
          <div className={styles.card}>
            <MailIcon className={styles.icon} />
            <p>info@edutrackmalawi.com</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About; 