import './dashboard.css';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">ADMIN DASHBOARD</h1>
      <p className="dashboard-welcome">Welcome, admin! This is the admin dashboard.</p>
      <ul className="list-links">
        <li><a href="/dashboard/events" className="link-item">Manage Events</a></li>
        <li><a href="/dashboard/users" className="link-item">Manage Users</a></li>
        <li><a href="/dashboard/event-register" className="link-item">Manage Registration</a></li>
      </ul>
    </div>
  );
};

export default Dashboard;
