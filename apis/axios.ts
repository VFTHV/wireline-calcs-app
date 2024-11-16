import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://formspree.io/f/movqlalv',
  timeout: 1000 * 10,
  timeoutErrorMessage: 'Server may take 1 minute to start. Please try again.',
});

export default customFetch;
