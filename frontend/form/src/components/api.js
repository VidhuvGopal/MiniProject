import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your actual backend URL

// Registration API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

// Login API
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
