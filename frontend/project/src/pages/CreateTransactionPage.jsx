import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import TransactionFormComponent from '../components/TransactionFormComponent';
import { createTransaction } from '../services/transactionService';

const CreateTransactionPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleCreateTransaction = async (transactionData) => {
    setError('');
    setSuccess('');

    try {
      await createTransaction(transactionData);
      setSuccess('Transaction created successfully!');
      setTimeout(() => {
        navigate('/transactions');
      }, 2000);
    } catch (err) {
      setError(err.message || 'Failed to create transaction. Please try again.');
    }
  };

  return (
    <div className="app-container">
      <NavbarComponent />
      <div className="container py-5">
        <h1 className="page-title">Create New Transaction</h1>
        <p className="page-subtitle">Process deposits, withdrawals, and transfers</p>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card">
              <div className="card-body">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}
                <TransactionFormComponent onSubmit={handleCreateTransaction} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTransactionPage;
