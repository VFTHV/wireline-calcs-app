import axios from 'axios';

const customFetch = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'http://192.168.21.48:3000/',
  // timeout: 1000 * 10,
  // timeoutErrorMessage: 'Server may take 1 min to start. Please try again!',
});

export default customFetch;
