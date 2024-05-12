import axios from 'axios';

const productionUrl = 'https://famous-newt-sweatshirt.cyclic.app/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});