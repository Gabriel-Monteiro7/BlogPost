import axios from 'axios';

export const api = axios.create({
  //https://locahost:3333  ->> Se for rodar local
  baseURL: 'https://jsonplaceholder.typicode.com',
});
