import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  AcademicCapIcon,
  CashIcon,
  CalendarIcon,
  ChatAltIcon,
  ChartBarIcon,
  ClockIcon,
  LogoutIcon,
  BellIcon,
  UserCircleIcon,
  DocumentDownloadIcon,
} from '@heroicons/react/solid';

import styles from './styles/styles.module.css';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ParentDash = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Chart.js global defaults
  useEffect(() => {
    ChartJS.defaults.font.family = "'Segoe UI', 'Helvetica', 'Arial', sans-serif";
    ChartJS.defaults.color = '#4b5563';
    ChartJS.defaults.scale.grid.color = 'rgba(0, 0, 0, 0.1)';
    ChartJS.defaults.plugins.tooltip.titleColor = '#fff';
    ChartJS.defaults.plugins.tooltip.bodyColor = '#fff';
    ChartJS.defaults.plugins.tooltip.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    ChartJS.defaults.plugins.tooltip.padding = 12;
  }, []);

  // Dummy student data
  const studentInfo = {
    name: "John Doe",
    regId: "123456",
    hostel: "Oceanview",
    room: "101A",
    class: "Form 3",
    attendance: 95,
    totalFees: 1500000,
    paidFees: 1000000,
    balance: 500000,
  };

  // Dummy notifications
  const notifications = [
    { id: 1, title: "Fee Payment Due", message: "Please clear your outstanding balance by next week.", time: "2 hours ago" },
    { id: 2, title: "Parent Meeting", message: "Virtual parent meeting scheduled for next Friday.", time: "1 day ago" },
    { id: 3, title: "Term Report", message: "End of term report is now available for download.", time: "2 days ago" },
  ];

  // Dummy subject scores
  const subjects = [
    { name: "Mathematics", score: 85, passFail: "Pass", trend: "+5%" },
    { name: "English", score: 78, passFail: "Pass", trend: "+2%" },
    { name: "Science", score: 92, passFail: "Pass", trend: "+8%" },
    { name: "History", score: 88, passFail: "Pass", trend: "-3%" },
    { name: "Geography", score: 75, passFail: "Pass", trend: "+1%" },
    { name: "Chemistry", score: 80, passFail: "Pass", trend: "+4%" },
    { name: "Biology", score: 70, passFail: "Pass", trend: "-2%" },
    { name: "ICT", score: 89, passFail: "Pass", trend: "+6%" },
    { name: "Physical Education", score: 90, passFail: "Pass", trend: "0%" },
  ];

  // Dummy term performance
  const termPerformance = {
    firstTerm: 78,
    secondTerm: 85,
    thirdTerm: 88,
  };

  // Dummy test results
  const testResults = [
    { testName: "Test 1", score: 52, passFail: "Pass", date: "2024-01-15" },
    { testName: "Geo Test", score: 68, passFail: "Pass", date: "2024-02-01" },
    { testName: "Continuous Assessment", score: 80, passFail: "Pass", date: "2024-02-15" },
  ];

  const termChartData = {
    labels: ['First Term', 'Second Term', 'Third Term'],
    datasets: [
      {
        label: 'Student Score (%)',
        data: [termPerformance.firstTerm, termPerformance.secondTerm, termPerformance.thirdTerm],
        fill: true,
        backgroundColor: 'rgba(30, 58, 138, 0.1)',
        borderColor: '#1E3A8A',
        tension: 0.4,
      },
    ],
  };

  const testChartData = {
    labels: testResults.map(test => test.testName),
    datasets: [
      {
        label: 'Test Scores',
        data: testResults.map(test => test.score),
        backgroundColor: ['#1E3A8A', '#3B82F6', '#60A5FA'],
        borderRadius: 8,
      },
    ],
  };

  const attendanceData = {
    labels: ['Present', 'Absent'],
    datasets: [{
      data: [studentInfo.attendance, 100 - studentInfo.attendance],
      backgroundColor: ['#1E3A8A', '#E5E7EB'],
      borderWidth: 0,
    }],
  };

  const isEligibleForNextClass =
    termPerformance.firstTerm >= 70 &&
    termPerformance.secondTerm >= 70 &&
    termPerformance.thirdTerm >= 70;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 12 }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { font: { size: 12 } }
      },
      x: {
        ticks: { font: { size: 12 } }
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 12 }
        }
      }
    }
  };

  const handleTabChange = (tab) => {
    setShowNotifications(false);
    setActiveTab(tab);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.div 
      className={styles.main_div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className={styles.top_bar}
        variants={itemVariants}
      >
        <div className={styles.top_bar_content}>
        <h1 className={styles.heading}>Parent Dashboard</h1>
          <div className={styles.top_bar_actions}>
            <motion.div 
              className={styles.notifications}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BellIcon 
                className={styles.icon} 
                onClick={() => setShowNotifications(!showNotifications)}
              />
              <span className={styles.notification_badge}>{notifications.length}</span>
              <AnimatePresence>
                {showNotifications && (
                  <motion.div 
                    className={styles.notifications_dropdown}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {notifications.map(notification => (
                      <div key={notification.id} className={styles.notification_item}>
                        <h4>{notification.title}</h4>
                        <p>{notification.message}</p>
                        <small>{notification.time}</small>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div 
              className={styles.user_profile}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <UserCircleIcon className={styles.icon} />
              <span>{studentInfo.name}</span>
            </motion.div>
      </div>
        </div>
        <div className={styles.tabs}>
          {['overview', 'academics', 'attendance', 'finance'].map(tab => (
            <motion.button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.active_tab : ''}`}
              onClick={() => handleTabChange(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div className={styles.overview_grid}>
              <motion.div 
                className={styles.student_info}
                variants={itemVariants}
              >
                <h3 className={styles.section_heading}>
                  <UserCircleIcon className={styles.section_icon} />
                  Student Information
                </h3>
                <div className={styles.student_card}>
                  <p><strong>Name:</strong> {studentInfo.name}</p>
                  <p><strong>Reg ID:</strong> {studentInfo.regId}</p>
                  <p><strong>Class:</strong> {studentInfo.class}</p>
                  <p><strong>Hostel:</strong> {studentInfo.hostel}</p>
                  <p><strong>Room:</strong> {studentInfo.room}</p>
                </div>
              </motion.div>

              <motion.div 
                className={styles.fees_balance}
                variants={itemVariants}
              >
                <h3 className={styles.section_heading}>
                  <CashIcon className={styles.section_icon} />
                  Fees Overview
                </h3>
                <div className={styles.balance_card}>
                  <div className={styles.fees_grid}>
                    <div className={styles.fees_item}>
                      <p className={styles.fees_label}>Total Fees</p>
                      <p className={styles.fees_amount}>MWK {studentInfo.totalFees.toLocaleString()}</p>
                    </div>
                    <div className={styles.fees_item}>
                      <p className={styles.fees_label}>Paid Amount</p>
                      <p className={styles.fees_amount}>MWK {studentInfo.paidFees.toLocaleString()}</p>
                    </div>
                    <div className={styles.fees_item}>
                      <p className={styles.fees_label}>Balance</p>
                      <p className={styles.fees_amount}>MWK {studentInfo.balance.toLocaleString()}</p>
                    </div>
                  </div>
                  <motion.button 
                    className={styles.pay_button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Pay Fees
                  </motion.button>
      </div>
              </motion.div>

              <motion.div 
                className={styles.calendar_section}
                variants={itemVariants}
              >
                <h3 className={styles.section_heading}>
                  <CalendarIcon className={styles.section_icon} />
                  School Calendar
                </h3>
        <div className={styles.calendar_card}>
                  <div className={styles.calendar_grid}>
                    <div className={styles.calendar_item}>
                      <CalendarIcon className={styles.calendar_icon} />
                      <div>
                        <p className={styles.event_date}>Sept 1st</p>
                        <p className={styles.event_name}>Term Begins</p>
                      </div>
                    </div>
                    <div className={styles.calendar_item}>
                      <CalendarIcon className={styles.calendar_icon} />
                      <div>
                        <p className={styles.event_date}>Dec 15th</p>
                        <p className={styles.event_name}>Christmas Break</p>
                      </div>
                    </div>
                    <div className={styles.calendar_item}>
                      <CalendarIcon className={styles.calendar_icon} />
                      <div>
                        <p className={styles.event_date}>March 30th</p>
                        <p className={styles.event_name}>Mid-Term</p>
                      </div>
                    </div>
        </div>
      </div>
              </motion.div>

              <motion.div 
                className={styles.messages_section}
                variants={itemVariants}
              >
                <h3 className={styles.section_heading}>
                  <ChatAltIcon className={styles.section_icon} />
                  Messages & Updates
                </h3>
        <div className={styles.messages_card}>
                  <div className={styles.messages_list}>
                    {notifications.map(notification => (
                      <div key={notification.id} className={styles.message_item}>
                        <h4>{notification.title}</h4>
                        <p>{notification.message}</p>
                        <small>{notification.time}</small>
                      </div>
                    ))}
                  </div>
                  <motion.button 
                    className={styles.view_messages_button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Messages
                  </motion.button>
        </div>
              </motion.div>
      </div>
          </motion.div>
        )}

        {activeTab === 'academics' && (
          <motion.div
            key="academics"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={styles.academic_insights_section}
          >
            <motion.div 
              className={styles.academic_insights_card}
              variants={itemVariants}
            >
              <div className={styles.performance_grid}>
                <div className={styles.scores_section}>
                  <div className={styles.table_container}>
          <table className={styles.scores_table}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Score</th>
                          <th>Status</th>
                          <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject) => (
                          <motion.tr 
                            key={subject.name}
                            whileHover={{ backgroundColor: '#f8fafc' }}
                          >
                  <td>{subject.name}</td>
                            <td>{subject.score}%</td>
                            <td>
                              <span className={`${styles.status} ${styles[subject.passFail.toLowerCase()]}`}>
                                {subject.passFail}
                              </span>
                            </td>
                            <td>
                              <span className={`${styles.trend} ${subject.trend.startsWith('+') ? styles.positive : subject.trend.startsWith('-') ? styles.negative : styles.neutral}`}>
                                {subject.trend}
                              </span>
                            </td>
                          </motion.tr>
              ))}
            </tbody>
          </table>
                  </div>
                </div>

                <div className={styles.charts_grid}>
                  <div className={styles.chart_section}>
                    <div className={styles.chart_container}>
                      <Line data={termChartData} options={chartOptions} height={250} />
                    </div>
                  </div>
                  <div className={styles.chart_section}>
                    <div className={styles.chart_container}>
                      <Bar data={testChartData} options={chartOptions} height={250} />
                    </div>
                  </div>
                </div>

                <div className={styles.eligibility_section}>
                  <div className={styles.eligibility_card}>
                    <div className={styles.eligibility_status}>
                      <p>Eligibility for Next Class:</p>
                      <span className={`${styles.status} ${isEligibleForNextClass ? styles.pass : styles.fail}`}>
            {isEligibleForNextClass ? "Eligible" : "Not Eligible"}
                      </span>
                    </div>
                    <div className={styles.term_scores}>
                      <div className={styles.term_score}>
                        <p>First Term</p>
                        <span>{termPerformance.firstTerm}%</span>
                      </div>
                      <div className={styles.term_score}>
                        <p>Second Term</p>
                        <span>{termPerformance.secondTerm}%</span>
                      </div>
                      <div className={styles.term_score}>
                        <p>Third Term</p>
                        <span>{termPerformance.thirdTerm}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'attendance' && (
          <motion.div
            key="attendance"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={styles.attendance_section}
          >
            <motion.div 
              className={styles.attendance_card}
              variants={itemVariants}
            >
              <div className={styles.attendance_grid}>
                <div className={styles.attendance_chart}>
                  <div className={styles.chart_container}>
                    <Doughnut 
                      data={attendanceData}
                      options={doughnutOptions}
                      height={250}
                    />
                  </div>
                  <div className={styles.attendance_percentage}>
                    <h2>{studentInfo.attendance}%</h2>
                    <p>Present</p>
                  </div>
                </div>

                <div className={styles.attendance_stats}>
                  <div className={styles.stat_item}>
                    <h4>Total School Days</h4>
                    <p>120 days</p>
                  </div>
                  <div className={styles.stat_item}>
                    <h4>Days Present</h4>
                    <p>114 days</p>
                  </div>
                  <div className={styles.stat_item}>
                    <h4>Days Absent</h4>
                    <p>6 days</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'finance' && (
          <motion.div
            key="finance"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={styles.finance_section}
          >
            <motion.div 
              className={styles.finance_card}
              variants={itemVariants}
            >
              <div className={styles.card_header}>
                <h3 className={styles.card_title}>
                  <CashIcon className={styles.section_icon} />
                  Financial Overview
                </h3>
              </div>

              <div className={styles.finance_grid}>
                <div className={styles.fees_summary}>
                  <div className={styles.summary_card}>
                    <h4>Total Fees</h4>
                    <p>MWK {studentInfo.totalFees.toLocaleString()}</p>
                  </div>
                  <div className={styles.summary_card}>
                    <h4>Amount Paid</h4>
                    <p>MWK {studentInfo.paidFees.toLocaleString()}</p>
                  </div>
                  <div className={styles.summary_card}>
                    <h4>Outstanding Balance</h4>
                    <p>MWK {studentInfo.balance.toLocaleString()}</p>
          </div>
        </div>

                <div className={styles.payment_history}>
                  <h4>Recent Payments</h4>
                  <div className={styles.table_container}>
                    <table className={styles.payment_table}>
            <thead>
              <tr>
                          <th>Date</th>
                          <th>Description</th>
                          <th>Amount</th>
                          <th>Status</th>
              </tr>
            </thead>
            <tbody>
                        <motion.tr whileHover={{ backgroundColor: '#f8fafc' }}>
                          <td>2024-02-01</td>
                          <td>Term 2 Fees</td>
                          <td>MWK 500,000</td>
                          <td><span className={styles.status_completed}>Completed</span></td>
                        </motion.tr>
                        <motion.tr whileHover={{ backgroundColor: '#f8fafc' }}>
                          <td>2024-01-15</td>
                          <td>Term 1 Balance</td>
                          <td>MWK 300,000</td>
                          <td><span className={styles.status_completed}>Completed</span></td>
                        </motion.tr>
                        <motion.tr whileHover={{ backgroundColor: '#f8fafc' }}>
                          <td>2024-01-05</td>
                          <td>Term 1 Fees</td>
                          <td>MWK 200,000</td>
                          <td><span className={styles.status_completed}>Completed</span></td>
                        </motion.tr>
            </tbody>
          </table>
        </div>
      </div>

                <div className={styles.payment_actions}>
                  <motion.button 
                    className={styles.pay_button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Make Payment
                  </motion.button>
                  <motion.button 
                    className={styles.download_button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <DocumentDownloadIcon className={styles.button_icon} />
                    Download Statement
                  </motion.button>
                </div>
      </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className={styles.logout_section}
        variants={itemVariants}
      >
        <motion.button 
          className={styles.logout_button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogoutIcon className={styles.button_icon} />
          Logout
        </motion.button>
      </motion.div>

      <motion.footer 
        className={styles.footer}
        variants={itemVariants}
      >
    <p>&copy; 2025 EduTrackMw. Powered by Oasis. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
};

export default ParentDash;
