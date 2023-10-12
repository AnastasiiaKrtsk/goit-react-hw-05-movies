import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/api';
import NoPoster from 'components/NoPoster/Untitled.png';
import styles from './Cast.module.css';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await getMovieCast(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <div className={styles.castContainer}>
      {cast.length !== 0 && (
        <div>
          <h2>Movie Cast</h2>
          <ul className={styles.castList}>
            {cast.map(actor => (
              <li key={actor.id} className={styles.castItem}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : { NoPoster }
                  }
                  alt={actor.original_name}
                  className={actor.profile_path ? '' : styles.noPoster}
                />
                <p>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cast.length === 0 && <div>No cast found</div>}
    </div>
  );
};

export default Cast;
