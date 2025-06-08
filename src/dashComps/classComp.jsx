import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import {
  AcademicCapIcon,
  SearchIcon,
  UserGroupIcon,
  ClipboardCheckIcon,
  BookOpenIcon,
  ChartBarIcon,
  MailIcon,
  DocumentDownloadIcon,
  PencilAltIcon,
} from '@heroicons/react/solid';
import styles from './styles/classcomp.module.css';
import EditStudent from './editstudent';

const dummyStudents = [
  { id: 'STU001', name: 'James Banda', gender: 'Male', age: 15, class: 'Form 1', attendance: '95%', performance: 'Good' },
  { id: 'STU002', name: 'Lilian Chirwa', gender: 'Female', age: 16, class: 'Form 1', attendance: '98%', performance: 'Excellent' },
  { id: 'STU003', name: 'John Phiri', gender: 'Male', age: 15, class: 'Form 1', attendance: '92%', performance: 'Average' },
  { id: 'STU004', name: 'Mary Tembo', gender: 'Female', age: 16, class: 'Form 1', attendance: '88%', performance: 'Good' },
  { id: 'STU005', name: 'David Mwanza', gender: 'Male', age: 15, class: 'Form 1', attendance: '90%', performance: 'Good' },
];

const ClassComp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedClass, setSelectedClass] = useState('Form 1');
  const [loading, setLoading] = useState(false);

  const filteredStudents = dummyStudents.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (student) => {
    setSelectedStudent(student);
  };

  const handleBackToClass = () => {
    setSelectedStudent(null);
  };

  const handleAction = async (action) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(`${action} action completed successfully!`);
    } catch (error) {
      toast.error(`Failed to complete ${action} action`);
    } finally {
      setLoading(false);
    }
  };

  const classStats = {
    totalStudents: filteredStudents.length,
    averageAttendance: '92.6%',
    averagePerformance: 'Good',
    lastUpdated: new Date().toLocaleDateString()
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.main_div}
    >
      <AnimatePresence mode="wait">
      {selectedStudent ? (
        <EditStudent student={selectedStudent} onBack={handleBackToClass} />
      ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
          <div className={styles.header}>
              <div className={styles.title_section}>
                <AcademicCapIcon className={styles.header_icon} />
                <h2 className={styles.title}>{selectedClass} - Class Overview</h2>
              </div>
            <div className={styles.menu}>
                <div className={styles.select_wrapper}>
                  <select
                    className={styles.select}
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                  >
                <option>Form 1</option>
                <option>Form 2</option>
                <option>Form 3</option>
                <option>Form 4</option>
              </select>
                </div>
                <div className={styles.search_wrapper}>
                  <SearchIcon className={styles.search_icon} />
              <input
                type="text"
                placeholder="Search by name or ID..."
                className={styles.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
                </div>
              </div>
            </div>

            <div className={styles.stats_grid}>
              <div className={styles.stat_card}>
                <UserGroupIcon className={styles.stat_icon} />
                <div className={styles.stat_info}>
                  <h3>Total Students</h3>
                  <p>{classStats.totalStudents}</p>
                </div>
              </div>
              <div className={styles.stat_card}>
                <ClipboardCheckIcon className={styles.stat_icon} />
                <div className={styles.stat_info}>
                  <h3>Average Attendance</h3>
                  <p>{classStats.averageAttendance}</p>
                </div>
              </div>
              <div className={styles.stat_card}>
                <ChartBarIcon className={styles.stat_icon} />
                <div className={styles.stat_info}>
                  <h3>Performance</h3>
                  <p>{classStats.averagePerformance}</p>
                </div>
            </div>
          </div>

          <div className={styles.teacher_menu}>
              <h3 className={styles.section_title}>
                <BookOpenIcon className={styles.section_icon} />
                Teacher Tools
              </h3>
            <div className={styles.menu_grid}>
                <motion.button
                  className={styles.menu_btn}
                  onClick={() => handleAction('Attendance')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                >
                  <ClipboardCheckIcon className={styles.btn_icon} />
                  Take Attendance
                </motion.button>
                <motion.button
                  className={styles.menu_btn}
                  onClick={() => handleAction('Homework')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                >
                  <BookOpenIcon className={styles.btn_icon} />
                  Assign Homework
                </motion.button>
                <motion.button
                  className={styles.menu_btn}
                  onClick={() => handleAction('Results')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                >
                  <ChartBarIcon className={styles.btn_icon} />
                  Upload Results
                </motion.button>
                <motion.button
                  className={styles.menu_btn}
                  onClick={() => handleAction('Message')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                >
                  <MailIcon className={styles.btn_icon} />
                  Message Students
                </motion.button>
                <motion.button
                  className={styles.menu_btn}
                  onClick={() => handleAction('Reports')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                >
                  <DocumentDownloadIcon className={styles.btn_icon} />
                  View Reports
                </motion.button>
                <motion.button
                  className={styles.menu_btn}
                  onClick={() => handleAction('Export')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                >
                  <DocumentDownloadIcon className={styles.btn_icon} />
                  Export Class
                </motion.button>
              </div>
          </div>

          <div className={styles.table_container}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                    <th>Attendance</th>
                    <th>Performance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                    <motion.tr
                      key={student.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.gender}</td>
                    <td>{student.age}</td>
                      <td>{student.attendance}</td>
                      <td>{student.performance}</td>
                    <td>
                        <motion.button
                        className={styles.edit_btn}
                        onClick={() => handleEditClick(student)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                      >
                          <PencilAltIcon className={styles.btn_icon} />
                        View/Edit
                        </motion.button>
                    </td>
                    </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

            <div className={styles.footer}>
              <p>Last updated: {classStats.lastUpdated}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ClassComp;
