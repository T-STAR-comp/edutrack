import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import {
  UserIcon,
  PhoneIcon,
  AcademicCapIcon,
  HomeIcon,
  IdentificationIcon,
  CalendarIcon,
} from '@heroicons/react/solid';
import styles from './styles/studentcreate.module.css';

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    class: '',
    guardianPhone: '',
    hostel: '',
    regNumber: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Student registered successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        class: '',
        guardianPhone: '',
        hostel: '',
        regNumber: ''
      });
    } catch (error) {
      toast.error('Failed to register student');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={styles.main_div}
    >
      <div className={styles.header}>
        <AcademicCapIcon className={styles.header_icon} />
        <h2 className={styles.heading}>Register New Student</h2>
      </div>

      <motion.form 
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.form_grid}>
          <div className={styles.form_group}>
            <label>
              <UserIcon className={styles.input_icon} />
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              required
            />
          </div>

          <div className={styles.form_group}>
            <label>
              <UserIcon className={styles.input_icon} />
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              required
            />
          </div>

          <div className={styles.form_group}>
            <label>
              <UserIcon className={styles.input_icon} />
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className={styles.form_group}>
            <label>
              <CalendarIcon className={styles.input_icon} />
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.form_group}>
            <label>
              <AcademicCapIcon className={styles.input_icon} />
              Class (Form)
            </label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
            >
              <option value="">Select class</option>
              <option value="Form 1">Form 1</option>
              <option value="Form 2">Form 2</option>
              <option value="Form 3">Form 3</option>
              <option value="Form 4">Form 4</option>
            </select>
          </div>

          <div className={styles.form_group}>
            <label>
              <PhoneIcon className={styles.input_icon} />
              Guardian Phone
            </label>
            <input
              type="tel"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              placeholder="Enter guardian's phone number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              required
            />
          </div>

          <div className={styles.form_group}>
            <label>
              <HomeIcon className={styles.input_icon} />
              Hostel
            </label>
            <input
              type="text"
              name="hostel"
              value={formData.hostel}
              onChange={handleChange}
              placeholder="Enter hostel name (if applicable)"
            />
          </div>

          <div className={styles.form_group}>
            <label>
              <IdentificationIcon className={styles.input_icon} />
              Reg number
            </label>
            <input
              type="text"
              name="regNumber"
              value={formData.regNumber}
              onChange={handleChange}
              placeholder="Enter registration number"
              required
            />
          </div>
        </div>

        <div className={styles.button_group}>
          <motion.button
            type="submit"
            className={styles.submit_button}
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <motion.div
                className={styles.loading_spinner}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              'Register Student'
            )}
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default CreateStudent;
