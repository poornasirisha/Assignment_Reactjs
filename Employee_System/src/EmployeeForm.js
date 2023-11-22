// EmployeeForm.js
import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [Designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({ name, Designation, salary });
    setName('');
    setDesignation('');
    setSalary('');
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Designation"
        value={Designation}
        onChange={(e) => setDesignation(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
