import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/users?username=${username}`);
      const users = await response.json();
      
      const user = users.find(user => user.username === username);

      if (user && user.password === password) {
        console.log('Login successful');
        alert(`Welcome back ${username}`);
        
        // Store user data in Redux store and localStorage
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            id: user.id,
            name: user.username,
          },
        });
        localStorage.setItem('userId', user.id);
        localStorage.setItem('userName', user.username);
        localStorage.setItem('email', user.email);
        
        navigate('/');
      } else {
        console.error('Invalid credentials');
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    document.getElementById('loginForm').classList.add('show');
  }, []);

  return (
 <>
 <Header></Header>
 <div className='background-image'>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div id="loginForm" className="card p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', transform: 'scale(1.02)'}}>
          <h3 className="text-center mb-4">Customer Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                <i className="bi bi-person"></i> Enter username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <button type="submit" className="btn btn-dark w-100 mb-2">LOGIN</button>
            <div className="text-center">Don't have an account?
              <a href="/register" className="text-decoration-blue text-primary"> Sign Up</a>
            </div>
          </form>
        
        </div>
      </div>
    </div>
 
 </>
  );
};

export default LoginForm;
