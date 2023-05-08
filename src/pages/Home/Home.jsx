import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrendsByDay } from '../../API/API';
import Loader from 'components/Loader/Loader';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const isLoaded = movies !== null;

  useEffect(() => {
    fetchTrendsByDay().then(setMovies);
  }, []);

  return (
    <>
      <div>
        <h1 className={css.movieTitle}>Trending today</h1>
        {!isLoaded && <Loader />}
        {isLoaded && <MoviesList movies={movies} />}
      </div>
    </>
  );
};

export default Home;
