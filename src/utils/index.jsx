import axios from 'axios';

const productionUrl = 'https://rich-blue-llama-vest.cyclic.cloud/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});