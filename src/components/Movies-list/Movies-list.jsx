import styles from './Movies-list.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles['movie-list']}>
      {movies.map(movie => (
        <li key={movie.id} className={styles['movie-item']}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={styles['movie-link']}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
