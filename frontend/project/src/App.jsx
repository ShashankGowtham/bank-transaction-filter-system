import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CreateTransactionPage from './pages/CreateTransactionPage';
import TransactionHistoryPage from './pages/TransactionHistoryPage';
import HighValueTransactionPage from './pages/HighValueTransactionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-transaction" element={<CreateTransactionPage />} />
        <Route path="/transactions" element={<TransactionHistoryPage />} />
        <Route path="/high-value" element={<HighValueTransactionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
