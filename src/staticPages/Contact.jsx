import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  ChatIcon
} from '@heroicons/react/outline';
import styles from './styles/shared.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      className={styles.pageContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className={styles.heroSection}>
        <h1>Contact Us</h1>
        <p>We're here to help and answer any questions you might have</p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <LocationMarkerIcon className={styles.icon} />
            <h3>Visit Our Office</h3>
            <p>Victoria Avenue</p>
            <p>Blantyre, Malawi</p>
          </div>
          <div className={styles.card}>
            <PhoneIcon className={styles.icon} />
            <h3>Phone</h3>
            <p>+265 1 234 5678</p>
            <p>+265 888 123 456</p>
          </div>
          <div className={styles.card}>
            <MailIcon className={styles.icon} />
            <h3>Email</h3>
            <p>info@edutrackmalawi.com</p>
            <p>support@edutrackmalawi.com</p>
          </div>
          <div className={styles.card}>
            <ClockIcon className={styles.icon} />
            <h3>Working Hours</h3>
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          <button type="submit" className={styles.button}>
            Send Message
            <ChatIcon className={styles.icon} style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
          </button>
        </form>
      </section>

      <section className={styles.contentSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>What are your support hours?</h3>
            <p>Our support team is available Monday through Friday from 8:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM.</p>
          </div>
          <div className={styles.card}>
            <h3>How quickly do you respond to inquiries?</h3>
            <p>We aim to respond to all inquiries within 24 business hours.</p>
          </div>
          <div className={styles.card}>
            <h3>Do you offer on-site support?</h3>
            <p>Yes, we provide on-site support for schools within Blantyre and surrounding areas.</p>
          </div>
          <div className={styles.card}>
            <h3>How can I schedule a demo?</h3>
            <p>You can schedule a demo by filling out the contact form above or calling our sales team directly.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact; 