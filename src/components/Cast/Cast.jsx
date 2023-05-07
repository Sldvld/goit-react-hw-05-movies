import { fetchCasts } from 'API/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    console.log(movieId);
    fetchCasts(movieId)
      .then(setCast)
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      <ul>
        {cast.map(({ character, id, name, profile_path }) => (
          <li key={`${id}-${character}`}>
            <img
              src={'https://image.tmdb.org/t/p/w500/'.concat(profile_path)}
              alt={name}
            />
            <div>
              <p>{name}</p>
              <p>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
