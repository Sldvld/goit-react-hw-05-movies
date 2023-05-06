import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrendsByDay } from '../../API/API';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendsByDay().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
}
