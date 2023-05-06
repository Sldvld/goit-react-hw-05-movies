export default function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_avarage, overwiew, genres } =
    movie;
  console.log(movie);
  const imgURL = `https://image.tmdb.org/t/p/w500/`.concat(poster_path);
  return (
    <div>
      <img src={imgURL} alt={title} width="350" />
    </div>
  );
}
