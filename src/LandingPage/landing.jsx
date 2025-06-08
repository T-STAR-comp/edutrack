import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  UserGroupIcon, 
  CogIcon,
  DeviceMobileIcon,
  SupportIcon,
  ArrowRightIcon
} from '@heroicons/react/solid';
import styles from './styles/styles.module.css';

const Landing = () => {
  const toHome = () => {
    window.location.href = ('/dashboard');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    {
      icon: <AcademicCapIcon className={styles.featureIcon} />,
      title: 'Student Dashboard',
      desc: 'Monitor academic performance, attendance, and growth in real-time.',
      onClick: toHome
    },
    {
      icon: <ChartBarIcon className={styles.featureIcon} />,
      title: 'Data Insights',
      desc: 'Visual reports and analytics to guide better educational decisions.'
    },
    {
      icon: <ShieldCheckIcon className={styles.featureIcon} />,
      title: 'Secure Access',
      desc: 'Role-based authentication with bank-level data encryption.'
    },
    {
      icon: <UserGroupIcon className={styles.featureIcon} />,
      title: 'Staff Management',
      desc: 'Streamline staff records, schedules, and performance reviews.'
    },
    {
      icon: <CogIcon className={styles.featureIcon} />,
      title: 'Resource Tracking',
      desc: 'Efficiently manage school inventory and resources.'
    },
    {
      icon: <DeviceMobileIcon className={styles.featureIcon} />,
      title: 'Mobile Ready',
      desc: 'Access your dashboard anywhere, on any device.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Schools' },
    { number: '10,000+', label: 'Students' },
    { number: '95%', label: 'Satisfaction' },
    { number: '24/7', label: 'Support' }
  ];

  const testimonials = [
    {
      quote: "EduTrack has revolutionized how we manage our school. The insights we get are invaluable.",
      author: "Head Teacher, Blantyre Primary",
      role: "Using EduTrack for 2 years"
    },
    {
      quote: "The student performance tracking features have helped us improve our academic outcomes significantly.",
      author: "Deputy Head, Lilongwe Academy",
      role: "Using EduTrack for 1.5 years"
    }
  ];

  return (
    <motion.div 
      className={styles.main_div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.header 
        className={styles.header}
        variants={itemVariants}
      >
        <motion.h1 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EduTrack Malawi
        </motion.h1>
        <nav className={styles.nav}>
          {['Features', 'About', 'Contact'].map((item) => (
            <motion.div
              key={item}
              variants={navItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.div>
          ))}
          <motion.div
            variants={navItemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className={styles.portal_link} to="/Auth">Portal</Link>
          </motion.div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className={styles.hero}
        variants={itemVariants}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Transform Your School Management
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Streamline operations, enhance student performance, and make data-driven decisions with Malawi's leading educational management platform.
        </motion.p>
        <div className={styles.heroButtons}>
          <Link to="/get-started">
            <motion.button 
              className={styles.cta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Get Started
            </motion.button>
          </Link>
          <Link to="/demo">
            <motion.button 
              className={styles.secondaryCta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              Watch Demo
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section className={styles.stats}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Features Section */}
      <motion.section 
        id="features" 
        className={styles.features}
      >
        <motion.h2 
          className={styles.sectionTitle}
          variants={itemVariants}
        >
          Powerful Features for Modern Schools
        </motion.h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.glassCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={feature.onClick}
            >
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className={styles.testimonials}>
        <motion.h2 
          className={styles.sectionTitle}
          variants={itemVariants}
        >
          What Our Users Say
        </motion.h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.testimonialCard}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 * index }}
            >
              <blockquote>{testimonial.quote}</blockquote>
              <cite>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </cite>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className={styles.ctaSection}
        variants={itemVariants}
      >
        <h2>Ready to Transform Your School?</h2>
        <p>Join the growing community of modern educational institutions in Malawi.</p>
        <Link to="/contact">
          <motion.button 
            className={styles.cta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us <ArrowRightIcon className={styles.buttonIcon} />
          </motion.button>
        </Link>
      </motion.section>

      {/* Support Section */}
      <motion.section className={styles.support}>
        <SupportIcon className={styles.supportIcon} />
        <h3>Need Help?</h3>
        <p>Our support team is available 24/7 to assist you.</p>
        <Link to="/support" className={styles.supportLink}>
          Visit Support Center
        </Link>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className={styles.footer}
        variants={itemVariants}
      >
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>EduTrack Malawi</h4>
            <p>Empowering education through technology</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About Us</Link>
          </div>
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <Link to="/help">Help Center</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 EduTrack Malawi. Powered By OASIS.</p>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Landing;
