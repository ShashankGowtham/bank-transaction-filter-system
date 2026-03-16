import api from './api';

export const createAccount = async (accountData) => {
  try {
    const response = await api.post('/accounts/create', accountData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAccount = async (accountNumber) => {
  try {
    const response = await api.get(`/accounts/${accountNumber}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
