import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import NoImage from '../Images/noImage.jpeg';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {movies.map(({ id, title, original_name, poster_path }) => (
        <Link
          key={id}
          className={css.movieLink}
          to={`/movies/${id}`}
          state={{ from: location }}
        >
          <li className={css.movieItem} key={id}>
            <div>
              <img
                className={css.movieImg}
                width="250"
                src={
                  poster_path
                    ? 'https://image.tmdb.org/t/p/w500/'.concat(poster_path)
                    : NoImage
                }
                alt={original_name}
              />
              <p className={css.movieTitle}>{title ?? original_name}</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_name: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
