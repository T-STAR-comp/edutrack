import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import styles from './styles/styles.module.css';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ParentDash = () => {
  // Dummy subject scores
  const subjects = [
    { name: "Mathematics", score: 85, passFail: "Pass" },
    { name: "English", score: 78, passFail: "Pass" },
    { name: "Science", score: 92, passFail: "Pass" },
    { name: "History", score: 88, passFail: "Pass" },
    { name: "Geography", score: 75, passFail: "Pass" },
    { name: "Chemistry", score: 80, passFail: "Pass" },
    { name: "Biology", score: 70, passFail: "Pass" },
    { name: "ICT", score: 89, passFail: "Pass" },
    { name: "Physical Education", score: 90, passFail: "Pass" },
  ];

  // Dummy term performance
  const termPerformance = {
    firstTerm: 78,
    secondTerm: 85,
    thirdTerm: 88,
  };

  // Dummy test results
  const testResults = [
    { testName: "Test 1", score: 72, passFail: "Pass" },
    { testName: "Geo Test", score: 68, passFail: "Fail" },
    { testName: "Continuous Assessment", score: 80, passFail: "Pass" },
  ];

  const isEligibleForNextClass =
    termPerformance.firstTerm >= 70 &&
    termPerformance.secondTerm >= 70 &&
    termPerformance.thirdTerm >= 70;

  const termChartData = {
    labels: ['First Term', 'Second Term', 'Third Term'],
    datasets: [
      {
        label: 'Student Score (%)',
        data: [termPerformance.firstTerm, termPerformance.secondTerm, termPerformance.thirdTerm],
        fill: false,
        borderColor: '#1E3A8A',
        tension: 0.2,
      },
    ],
  };

  const testChartData = {
    labels: testResults.map(test => test.testName),
    datasets: [
      {
        label: 'Test Scores',
        data: testResults.map(test => test.score),
        backgroundColor: ['#1E3A8A', '#EF4444', '#10B981'],
      },
    ],
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.top_bar}>
        <h1 className={styles.heading}>Parent Dashboard</h1>
      </div>

      <div className={styles.student_info}>
        <h3 className={styles.section_heading}>Student Information</h3>
        <div className={styles.student_card}>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Reg ID:</strong> 123456</p>
          <p><strong>Hostel:</strong> Oceanview</p>
          <p><strong>Room:</strong> 101A</p>
        </div>
      </div>

      <div className={styles.fees_balance}>
        <h3 className={styles.section_heading}>Fees Balance</h3>
        <div className={styles.balance_card}>
          <p><strong>Balance:</strong> MWK 500,000</p>
          <button className={styles.pay_button}>Pay Fees</button>
        </div>
      </div>

      <div className={styles.calendar_section}>
        <h3 className={styles.section_heading}>School Calendar</h3>
        <div className={styles.calendar_card}>
          <ul>
            <li><strong>Sept 1st:</strong> Term Begins</li>
            <li><strong>Dec 15th:</strong> Christmas Break</li>
            <li><strong>March 30th:</strong> Mid-Term</li>
          </ul>
        </div>
      </div>

      <div className={styles.messages_section}>
        <h3 className={styles.section_heading}>New Messages</h3>
        <div className={styles.messages_card}>
          <p>You have 2 unread messages.</p>
          <button className={styles.view_messages_button}>View Messages</button>
        </div>
      </div>

      {/* Academic Insights */}
      <div className={styles.academic_insights_section}>
        <h3 className={styles.section_heading}>Academic Insights</h3>
        <div className={styles.academic_insights_card}>
          <h4>End-of-Term Test Scores</h4>
          <table className={styles.scores_table}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Score</th>
                <th>Pass/Fail</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject) => (
                <tr key={subject.name}>
                  <td>{subject.name}</td>
                  <td>{subject.score}</td>
                  <td>{subject.passFail}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4>Term Performance</h4>
          <p><strong>First Term:</strong> {termPerformance.firstTerm}%</p>
          <p><strong>Second Term:</strong> {termPerformance.secondTerm}%</p>
          <p><strong>Third Term:</strong> {termPerformance.thirdTerm}%</p>

          <p>
            <strong>Eligibility for Next Class:</strong>{" "}
            {isEligibleForNextClass ? "Eligible" : "Not Eligible"}
          </p>

          <div className={styles.chart_section}>
            <h4>Student Performance Over Terms</h4>
            <Line data={termChartData} />
          </div>
        </div>

        {/* Current Term Test Table and Chart */}
        <div className={styles.test_performance_card}>
          <h4>Current Term Tests</h4>
          <table className={styles.scores_table}>
            <thead>
              <tr>
                <th>Test</th>
                <th>Score</th>
                <th>Pass/Fail</th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((test) => (
                <tr key={test.testName}>
                  <td>{test.testName}</td>
                  <td>{test.score}</td>
                  <td>{test.passFail}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.chart_section}>
            <h4>Test Score Distribution</h4>
            <Bar data={testChartData} />
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className={styles.logout_section}>
        <button className={styles.logout_button}>Logout</button>
      </div>

      {/* Footer */}
    <footer className={styles.footer}>
    <p>&copy; 2025 EduTrackMw. Powered by Oasis. All rights reserved.</p>
    </footer>

    </div>
  );
};

export default ParentDash;
