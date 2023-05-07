import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import { fetchByName } from 'API/API';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    fetchByName(query).then(setMovies);
  }, [searchParams]);

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} onChange={handleChange} />
      <MoviesList movies={movies} />
    </>
  );
}
