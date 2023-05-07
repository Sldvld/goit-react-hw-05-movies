import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrendsByDay } from '../../API/API';
import Loader from 'Loader/Loader';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const isLoaded = movies !== null;

  useEffect(() => {
    fetchTrendsByDay().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {!isLoaded && <Loader />}
      {isLoaded && <MoviesList movies={movies} />}
    </>
  );
}
