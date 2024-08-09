import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const email = localStorage.getItem('email'); // Get userId from localStorage
  const isAdmin = email === 'admin@gmail.com';
  return isAdmin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;