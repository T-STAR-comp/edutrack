import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from '@headlessui/react';
import { toast, Toaster } from 'react-hot-toast';
import {
  AcademicCapIcon,
  UserGroupIcon,
  CogIcon,
  ChartBarIcon,
  CalendarIcon,
  BellIcon,
  LogoutIcon,
  UserCircleIcon,
  ClockIcon,
} from '@heroicons/react/solid';
import styles from './styles/styles.module.css';

// Imported components
import CreateStudent from '../dashComps/studentcreate';
import CreateNewStaffUser from '../dashComps/staffcreate';
import ClassComp from '../dashComps/classComp';
import FinancialComp from '../dashComps/financialComp';

const MainDashBoard = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [schoolStats, setSchoolStats] = useState({
    totalStudents: 450,
    totalStaff: 35,
    attendance: 92,
    feesCollection: 85
  });

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);

    // Mock notifications
    setNotifications([
      { id: 1, message: 'New student registration pending approval', time: '5m ago' },
      { id: 2, message: 'Staff meeting scheduled for tomorrow', time: '1h ago' },
      { id: 3, message: 'Term report generation due', time: '2h ago' }
    ]);
  }, []);

  const handleLogout = () => {
    toast.success('Logging out...');
    // Add actual logout logic here
  };

  // Handle content switching with animations
  const renderContent = () => {
    const content = {
      welcome: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={styles.welcome_section}
        >
          <div className={styles.stats_grid}>
            <div className={styles.stat_card}>
              <div className={styles.stat_icon_wrapper}>
                <UserGroupIcon className={styles.stat_icon} />
              </div>
              <div className={styles.stat_info}>
                <h3>Total Students</h3>
                <p>{schoolStats.totalStudents}</p>
              </div>
            </div>
            <div className={styles.stat_card}>
              <div className={styles.stat_icon_wrapper}>
                <AcademicCapIcon className={styles.stat_icon} />
              </div>
              <div className={styles.stat_info}>
                <h3>Staff Members</h3>
                <p>{schoolStats.totalStaff}</p>
              </div>
            </div>
            <div className={styles.stat_card}>
              <div className={styles.stat_icon_wrapper}>
                <ChartBarIcon className={styles.stat_icon} />
              </div>
              <div className={styles.stat_info}>
                <h3>Attendance Rate</h3>
                <p>{schoolStats.attendance}%</p>
              </div>
            </div>
            <div className={styles.stat_card}>
              <div className={styles.stat_icon_wrapper}>
                <CogIcon className={styles.stat_icon} />
              </div>
              <div className={styles.stat_info}>
                <h3>Fees Collection</h3>
                <p>{schoolStats.feesCollection}%</p>
              </div>
            </div>
          </div>
          
          <div className={styles.recent_activity}>
            <h3>Recent Activity</h3>
            <div className={styles.activity_list}>
              {notifications.map(notification => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={styles.activity_item}
                >
                  <ClockIcon className={styles.activity_icon} />
                  <div>
                    <p>{notification.message}</p>
                    <small>{notification.time}</small>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ),
      createStudent: <CreateStudent />,
      createStaff: <CreateNewStaffUser />,
      form1: <ClassComp />,
      financials: <FinancialComp />
    };

    return (
      <AnimatePresence mode="wait">
        {content[activeSection] || content.welcome}
      </AnimatePresence>
    );
  };

  if (isLoading) {
    return (
      <div className={styles.loading_screen}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className={styles.loader}
        />
        <p>Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard_wrapper}>
      <Toaster position="top-right" />
      
      {/* Side Navigation Panel */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className={styles.sidebar}
      >
        <div className={styles.school_info}>
          <h2 className={styles.school_name}>Mtendere Sec School</h2>
          <p className={styles.school_id}>School ID: MTESC-0068</p>
        </div>

        <nav className={styles.nav_links}>
          {[
            { name: 'Dashboard', icon: <ChartBarIcon />, section: 'welcome' },
            { name: 'Create Student', icon: <UserGroupIcon />, section: 'createStudent' },
            { name: 'Create Staff', icon: <UserCircleIcon />, section: 'createStaff' },
            { name: 'View Form 1', icon: <AcademicCapIcon />, section: 'form1' },
            { name: 'View Form 2', icon: <AcademicCapIcon />, section: 'form2' },
            { name: 'View Form 3', icon: <AcademicCapIcon />, section: 'form3' },
            { name: 'View Form 4', icon: <AcademicCapIcon />, section: 'form4' },
            { name: 'Financials', icon: <ChartBarIcon />, section: 'financials' },
          ].map((item) => (
            <motion.button
              key={item.section}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${styles.nav_button} ${activeSection === item.section ? styles.active : ''}`}
              onClick={() => setActiveSection(item.section)}
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.button>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={styles.logout_button}
          onClick={handleLogout}
        >
          <LogoutIcon />
          <span>Logout</span>
        </motion.button>
      </motion.div>

      {/* Main Content Area */}
      <div className={styles.main_content}>
        <header className={styles.topbar}>
          <h1 className={styles.page_title}>Main Admin Dashboard</h1>
          
          <div className={styles.topbar_actions}>
            <Menu as="div" className={styles.notifications_menu}>
              <Menu.Button className={styles.notifications_button}>
                <BellIcon />
                <span className={styles.notification_badge}>{notifications.length}</span>
              </Menu.Button>
              
              <Menu.Items className={styles.notifications_dropdown}>
                {notifications.map((notification) => (
                  <Menu.Item key={notification.id}>
                    {({ active }) => (
                      <div className={`${styles.notification_item} ${active ? styles.active : ''}`}>
                        <p>{notification.message}</p>
                        <small>{notification.time}</small>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>

            <div className={styles.user_profile}>
              <UserCircleIcon />
              <span>Admin</span>
            </div>
          </div>
        </header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={styles.content_area}
        >
          {renderContent()}
        </motion.section>

        <footer className={styles.footer}>
          <p>&copy; 2025 EduTrackMw. Powered by Oasis. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default MainDashBoard;
