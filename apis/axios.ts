import axios from 'axios';

const customFetch = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'http://192.168.21.48:3000/',
  timeout: 1000 * 10,
});

export default customFetch;
