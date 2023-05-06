import axios from 'axios';

const API_KEY = 'b020810aa3cd987a958ad25364f86170';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendsByDay = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return data.results;
};
export const fetchByName = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  return data.results;
};
export const fetchById = async id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  return data;
};
