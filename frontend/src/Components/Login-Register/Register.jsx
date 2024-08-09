import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { username, password, email };
    console.log('Submitting user:', user);

    try {
      const response = await axios.post('http://localhost:5000/users', user);
      console.log('User registered:', response.data);
      alert(`Welcome new user ${username}`); // Show alert on successful registration
      navigate('/login'); // Redirect to login page after registration
    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };

  useEffect(() => {
    document.getElementById('registrationForm').classList.add('show');
  }, []);

  return (
<>

<Header></Header>
<div className='background-image'>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div id="registrationForm" className="card p-4 fade-in" style={{ maxWidth: '400px', width: '100%', borderRadius: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h3 className="text-center mb-4">Customer Registration</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                <i className="bi bi-person"></i> Enter Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <i className="bi bi-envelope"></i> Enter Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <i className="bi bi-lock"></i> Enter Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-dark w-100 mb-2">REGISTER</button>
            <div className="text-center">Already have an account?
              <a href="/login" className="text-decoration-blue text-primary"> Login</a>
            </div>
          </form>
      
        </div>
      </div>
    </div>
</>
  );
};

export default RegistrationForm;
