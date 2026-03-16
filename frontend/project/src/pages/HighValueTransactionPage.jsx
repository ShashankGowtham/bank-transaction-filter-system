import React, { useEffect, useState } from "react";
import { getHighValueTransactions } from "../services/transactionService";

function HighValueTransactionPage() {

  const [transactions,setTransactions] = useState([]);

  useEffect(()=>{
    loadTransactions();
  },[]);

  const loadTransactions = async () => {
    try{
      const response = await getHighValueTransactions();
      setTransactions(response.data);
    }catch(error){
      console.error(error);
    }
  };

  return (

    <div style={styles.container}>

      <h1 style={styles.title}>Premium Transactions</h1>

      <div style={styles.grid}>

        {transactions.map((t)=>(
          <div key={t.transactionId} style={styles.card}>

            <h3>Account: {t.accountNumber}</h3>

            <p>Type: {t.transactionType}</p>

            <p style={styles.amount}>
              ₹ {t.amount}
            </p>

            <p style={styles.date}>
              {new Date(t.date).toLocaleString()}
            </p>

          </div>
        ))}

        {transactions.length===0 && (
          <p>No premium transactions</p>
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

  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
    gap:"20px"
  },

  card:{
    background:"#111",
    padding:"20px",
    borderRadius:"12px",
    boxShadow:"0 0 20px rgba(0,255,150,0.3)"
  },

  amount:{
    color:"#00ff88",
    fontSize:"20px",
    fontWeight:"bold"
  },

  date:{
    fontSize:"12px",
    opacity:0.7
  }

};

export default HighValueTransactionPage;