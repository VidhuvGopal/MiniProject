import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/registration.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send registration data to Node.js API for registration
    // Use state values for name, dateOfBirth, email, password, and confirmPassword

    // After successful registration, navigate to the login page
    navigate('/login');
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={handleDateOfBirthChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <button type="submit">Register</button>
        
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Registration;
