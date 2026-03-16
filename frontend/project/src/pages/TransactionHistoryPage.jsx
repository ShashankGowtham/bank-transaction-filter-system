import React, { useEffect, useState } from "react";
import { getTransactions } from "../services/transactionService";

function TransactionHistoryPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const response = await getTransactions();
      setTransactions(response.data);
    } catch (error) {
      console.error("Error loading transactions:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Transaction History</h1>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Account</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr key={t.transactionId}>
                <td>{t.transactionId}</td>
                <td>{t.accountNumber}</td>
                <td>{t.transactionType}</td>
                <td style={{color:"#00ff88",fontWeight:"bold"}}>
                  ₹ {t.amount}
                </td>
                <td>{new Date(t.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {transactions.length === 0 && (
          <p style={{textAlign:"center",marginTop:"20px"}}>
            No transactions found
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container:{
    padding:"40px",
    color:"white"
  },

  title:{
    textAlign:"center",
    marginBottom:"30px"
  },

  tableWrapper:{
    background:"#111",
    borderRadius:"10px",
    padding:"20px",
    boxShadow:"0 0 20px rgba(0,255,150,0.2)"
  },

  table:{
    width:"100%",
    borderCollapse:"collapse"
  }
};

export default TransactionHistoryPage;