import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/documents', // Make sure this is correct
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default api;
