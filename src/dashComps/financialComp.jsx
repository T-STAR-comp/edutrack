import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CashIcon,
  CreditCardIcon,
  DocumentReportIcon,
  ChartPieIcon,
  UserGroupIcon,
  ReceiptTaxIcon,
  TrendingUpIcon,
  DocumentTextIcon,
  ClipboardCheckIcon,
} from '@heroicons/react/solid';
import styles from './styles/financialcomp.module.css';

const FinancialComp = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('this-month');
  const [searchQuery, setSearchQuery] = useState('');

  const financialStats = {
    totalCollected: 'MWK 25,450,000',
    pendingPayments: 'MWK 8,750,000',
    expenses: 'MWK 12,680,000',
    balance: 'MWK 12,770,000'
  };

  return (
    <motion.div 
      className={styles.main_div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header 
        className={styles.header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.title_section}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <CashIcon className={styles.header_icon} />
          </motion.div>
          <h2 className={styles.title}>Financial Management</h2>
        </div>

        <div className={styles.menu}>
          <motion.div 
            className={styles.select_wrapper}
            whileHover={{ scale: 1.02 }}
          >
            <select
              className={styles.select}
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="this-month">This Month</option>
              <option value="last-month">Last Month</option>
              <option value="this-term">This Term</option>
              <option value="last-term">Last Term</option>
              <option value="this-year">This Year</option>
            </select>
          </motion.div>

          <motion.div 
            className={styles.search_wrapper}
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="text"
              placeholder="Search transactions..."
              className={styles.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </motion.header>

      <div className={styles.stats_grid}>
        {Object.entries(financialStats).map(([key, value], index) => (
          <motion.div
            key={key}
            className={styles.stat_card}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className={styles.stat_icon_wrapper}>
              {key === 'totalCollected' && <CreditCardIcon className={styles.stat_icon} />}
              {key === 'pendingPayments' && <DocumentReportIcon className={styles.stat_icon} />}
              {key === 'expenses' && <ReceiptTaxIcon className={styles.stat_icon} />}
              {key === 'balance' && <TrendingUpIcon className={styles.stat_icon} />}
            </div>
            <div className={styles.stat_info}>
              <h3>{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
              <p>{value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.menu_grid}>
        {[
          { icon: CreditCardIcon, title: 'Fee Collection', desc: 'Record and manage student fee payments' },
          { icon: UserGroupIcon, title: 'Staff Payroll', desc: 'Manage staff salaries and allowances' },
          { icon: DocumentTextIcon, title: 'Invoices', desc: 'Generate and manage fee invoices' },
          { icon: ClipboardCheckIcon, title: 'Expenses', desc: 'Track and manage school expenses' },
          { icon: ChartPieIcon, title: 'Financial Reports', desc: 'Generate detailed financial reports' },
          { icon: DocumentReportIcon, title: 'Fee Structure', desc: 'Set and manage fee structures' }
        ].map((item, index) => (
          <motion.button
            key={item.title}
            className={styles.menu_btn}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#f8fafc',
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className={styles.btn_icon} />
            <div className={styles.btn_content}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.div 
        className={styles.recent_transactions}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className={styles.section_header}>
          <h3>Recent Transactions</h3>
          <motion.button 
            className={styles.view_all_btn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All
          </motion.button>
        </div>
        <div className={styles.table_container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: '#TRX-2024-001',
                  date: '2024-01-15',
                  desc: 'School Fees Payment - John Doe',
                  type: 'Income',
                  amount: 'MWK 250,000',
                  status: 'completed'
                },
                {
                  id: '#TRX-2024-002',
                  date: '2024-01-14',
                  desc: 'Staff Salary - January',
                  type: 'Expense',
                  amount: 'MWK 450,000',
                  status: 'completed'
                },
                {
                  id: '#TRX-2024-003',
                  date: '2024-01-14',
                  desc: 'School Fees Payment - Jane Smith',
                  type: 'Income',
                  amount: 'MWK 250,000',
                  status: 'pending'
                }
              ].map((transaction, index) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ backgroundColor: '#f8fafc' }}
                >
                  <td>{transaction.id}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.desc}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                  <td>
                    <span className={styles[`status_${transaction.status}`]}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FinancialComp; 