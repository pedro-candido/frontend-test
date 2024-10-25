import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.binance.com/api/v3',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
