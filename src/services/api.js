import axios from 'axios';

export const swapi = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const git = axios.create({
  baseURL: 'https://api.github.com/users',
});
