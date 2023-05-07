import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import { fetchById } from '../../API/API';
import { Link } from 'react-router-dom';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchById(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  return (
    <>
      <Link to={backLink.current}>
        <button>← Go back</button>
      </Link>

      <MovieCard movie={movieDetails} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
