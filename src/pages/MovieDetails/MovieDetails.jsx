import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import { fetchById } from '../../API/API';
import { Link } from 'react-router-dom';
import css from './MovieDetails.module.css';
import Loader from '../../components/Loader/Loader';

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
      <Link className={css.searchButton} to={backLink.current}>
        ← Go back
      </Link>

      <MovieCard movie={movieDetails} />
      <ul className={css.linksCR}>
        <li>
          <Link className={css.castLink} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.reviewsLink} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
