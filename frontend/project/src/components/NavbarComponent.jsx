import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid px-4">
        <Link className="navbar-brand" to="/dashboard">
          💳 BankFlow
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-transaction">
                New Transaction
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/transactions">
                History
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/high-value">
                Premium
              </Link>
            </li>
            <li className="nav-item ms-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
