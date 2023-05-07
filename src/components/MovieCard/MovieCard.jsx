import PropTypes from 'prop-types';
import css from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const imgURL = `https://image.tmdb.org/t/p/w500/`.concat(poster_path);
  const realiseDate = release_date.slice(0, 4);
  const genresList = genres.map(ganre => ganre.name).join(', ');
  const voteAvarage = vote_average.toFixed(1);
  return (
    <>
      <div className={css.movieCard}>
        <img src={imgURL} alt={title} width="250" />
        <div className={css.movieSubscribes}>
          <h2>
            {title} ({realiseDate})
          </h2>
          <p>User score: {voteAvarage}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresList} </p>
        </div>
      </div>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
