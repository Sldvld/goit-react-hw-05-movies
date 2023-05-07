import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title, original_name, poster_path }) => (
        <li key={id}>
          <div>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                width="250"
                src={'https://image.tmdb.org/t/p/w500/'.concat(poster_path)}
                alt={original_name}
              />
              <p>{title ?? original_name}</p>
            </Link>
          </div>
        </li>
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
