import api from "./api";

export const createTransaction = async (transaction) => {
  return api.post("/transactions", transaction);
};

export const getTransactions = async () => {
  return api.get("/transactions");
};

export const getHighValueTransactions = async () => {
  return api.get("/transactions/high-value");
};