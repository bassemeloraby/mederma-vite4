import axios from 'axios';

const productionUrl = 'https://server-mederma.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});