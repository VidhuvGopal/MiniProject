import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    navigate('/protected');
  };

  return (
    <div className="login-container">
      <div className="login-heading">
        <h2 style={{ textAlign: 'center', marginTop: 0 }}>SIGN IN</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="checkbox-group">
          <label htmlFor="rememberMe" style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
            <span style={{ marginLeft: '5px' }}>Remember me</span>
          </label>
        </div>
        <button type="submit">Login</button>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <div className="create-account">
          Don't have an account? <Link to="/registration">Create New Account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
