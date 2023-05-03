import { useState, useEffect, useCallback } from 'react';

import { fetchTrendsByDay } from '../API/API';

export const Home = ({ results }) => {
  const [movies, setMovies] = useState(null);

  const handleFetchPopular = useCallback(async () => {
    const response = await fetchTrendsByDay();
    setMovies(response);
  }, []);
  useEffect(() => {
    handleFetchPopular(data);
  }, [handleFetchPopular]);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {data.results.map(movie => ({ id, title, poster }) => {
          return <li>{title}</li>;
        })}
      </ul>
    </>
  );
};
fetchTrendsByDay();
console.log(fetchTrendsByDay());
