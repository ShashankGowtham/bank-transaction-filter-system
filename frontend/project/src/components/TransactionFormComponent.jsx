import React, { useState } from 'react';

const TransactionFormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    transactionType: 'Deposit',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="accountNumber" className="form-label">
          Account Number
        </label>
        <input
          type="text"
          className="form-control"
          id="accountNumber"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="transactionType" className="form-label">
          Transaction Type
        </label>
        <select
          className="form-select"
          id="transactionType"
          name="transactionType"
          value={formData.transactionType}
          onChange={handleChange}
          required
        >
          <option value="Deposit">Deposit</option>
          <option value="Withdraw">Withdraw</option>
          <option value="Transfer">Transfer</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Transaction
      </button>
    </form>
  );
};

export default TransactionFormComponent;
