import PropTypes from 'prop-types';
export default function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const imgURL = `https://image.tmdb.org/t/p/w500/`.concat(poster_path);
  const realiseDate = release_date.slice(0, 4);
  const genresList = genres.map(ganre => ganre.name).join(', ');
  return (
    <>
      <div>
        <img src={imgURL} alt={title} width="350" />
      </div>
      <div>
        <h2>
          {title} ({realiseDate})
        </h2>
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresList} </p>
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
