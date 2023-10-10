const MoviesList = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies.map(movie => (
        <li key={movie.id} className="movie-item">
          <a href={`/movies/${movie.id}`} className="movie-link">
            {movie.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
