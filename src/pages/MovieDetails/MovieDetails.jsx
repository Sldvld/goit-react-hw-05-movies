import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import { fetchById } from '../../API/API';
import { Link } from 'react-router-dom';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchById(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }
  const backLink = location.state?.from ?? '/';

  return (
    <>
      <h1>MoviesDetails</h1>
      {/* <Link to={backLink}>
        {' '}
        <button>Go back</button>
      </Link> */}

      <MovieCard movie={movieDetails} />
    </>
  );
}
