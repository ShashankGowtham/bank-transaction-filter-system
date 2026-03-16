import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <NavbarComponent />
      <div className="container py-5">
        <h1 className="page-title">Transaction Dashboard</h1>
        <p className="page-subtitle">Manage your banking operations efficiently</p>
        <div className="row g-4">
          <div className="col-md-4">
            <div
              className="dashboard-card"
              onClick={() => navigate('/create-transaction')}
            >
              <div className="dashboard-card-icon">💰</div>
              <h3 className="mb-3">Create Transaction</h3>
              <p className="text-muted mb-4">
                Initiate deposits, withdrawals, or transfers
              </p>
              <button className="btn btn-primary">Create New</button>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="dashboard-card"
              onClick={() => navigate('/transactions')}
            >
              <div className="dashboard-card-icon">📊</div>
              <h3 className="mb-3">Transaction History</h3>
              <p className="text-muted mb-4">
                View complete transaction records
              </p>
              <button className="btn btn-primary">View History</button>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="dashboard-card"
              onClick={() => navigate('/high-value')}
            >
              <div className="dashboard-card-icon">⭐</div>
              <h3 className="mb-3">High Value Transactions</h3>
              <p className="text-muted mb-4">
                Transactions exceeding $10,000
              </p>
              <button className="btn btn-primary">View Premium</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
