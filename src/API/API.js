import axios from 'axios';

const API_KEY = 'b020810aa3cd987a958ad25364f86170';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendsByDay = async () => {
  return await axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data);
};
export const fetchByName = async () => {
  return await axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    )
    .then(response => response.data);
};
