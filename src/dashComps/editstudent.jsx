import styles from './styles/editstudent.module.css';
import { useState } from 'react';

const EditStudent = ({ student, onBack }) => {
  const [studentData, setStudentData] = useState({
    name: student.name || '',
    gender: student.gender || '',
    age: student.age || '',
    class: student.class || '',
    suspended: student.suspended || false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Student:', studentData);
    onBack(); // return to class view
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
      console.log('Student deleted:', student.id);
      onBack();
    }
  };

  return (
    <div className={styles.edit_container}>
      <h2 className={styles.header}>Edit Student - {student.name}</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name:
          <input
            type="text"
            value={studentData.name}
            onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
          />
        </label>

        <label>
          Gender:
          <select
            value={studentData.gender}
            onChange={(e) => setStudentData({ ...studentData, gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <label>
          Age:
          <input
            type="number"
            value={studentData.age}
            onChange={(e) => setStudentData({ ...studentData, age: e.target.value })}
          />
        </label>

        <label>
          Class:
          <select
            value={studentData.class}
            onChange={(e) => setStudentData({ ...studentData, class: e.target.value })}
          >
            <option value="Form 1">Form 1</option>
            <option value="Form 2">Form 2</option>
            <option value="Form 3">Form 3</option>
            <option value="Form 4">Form 4</option>
          </select>
        </label>

        <label>
          Suspension Status:
          <select
            value={studentData.suspended ? 'Suspended' : 'Active'}
            onChange={(e) =>
              setStudentData({ ...studentData, suspended: e.target.value === 'Suspended' })
            }
          >
            <option value="Active">Active</option>
            <option value="Suspended">Suspended</option>
          </select>
        </label>

        <div className={styles.buttons}>
          <button type="submit" className={styles.save_btn}>
            Save Changes
          </button>
          <button type="button" className={styles.back_btn} onClick={onBack}>
            Back
          </button>
        </div>

        <button type="button" className={styles.delete_btn} onClick={handleDelete}>
          Delete Student
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
