import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import { Loader } from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import NoPoster from 'components/NoPoster/Untitled.png';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backHref = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movie = await getMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }
  const popularity = Math.round(movieDetails.vote_average * 10);

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            : `${NoPoster}`
        }
        alt={movieDetails.title}
      />
      <div className={styles.details}>
        <Link to={backHref.current}>
          <Button text="Go back" />
        </Link>
        <h1>{movieDetails.tittle}</h1>
        <h4>User score: {popularity}%</h4>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h2>Genres</h2>
        <p>
          {movieDetails.genres.map(genre => (
            <span key={genre.id}> {genre.name}</span>
          ))}
        </p>
        <div className={styles.info}>
          <h3>Additional information</h3>
          <div className={styles.links}>
            <Link to="cast">
              <Button text="Cast" />
            </Link>
            <Link to="reviews">
              <Button text="Reviews" />
            </Link>
          </div>
          <div className={styles.outlet}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
