import { fetchCasts } from 'API/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
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
      <ul className={css.castList}>
        {cast.map(({ character, id, name, profile_path }) => (
          <li className={css.castItem} key={`${id}-${character}`}>
            <img
              width="160"
              src={'https://image.tmdb.org/t/p/w500/'.concat(profile_path)}
              alt={name}
            />
            <div>
              <p className={css.realName}>{name}</p>
              <p className={css.castName}>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
