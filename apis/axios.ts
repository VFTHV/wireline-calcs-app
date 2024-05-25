import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://192.168.131.24:3000/',
  timeout: 1000 * 10,
  timeoutErrorMessage: 'Server may take 1 minute to start. Please try again.',
});

export default customFetch;
