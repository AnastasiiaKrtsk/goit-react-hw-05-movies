import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/Movies-list/Movies-list';
import { handleSearch } from '../services/api';
import SearchForm from 'components/Search-Form/Search-Form';
import { Loader } from 'components/Loader/Loader';
import styles from './Movies.module.css';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [loading, setLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await handleSearch(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <div className={styles.container}>
      <SearchForm
        className={styles.searchForm}
        value={movieName}
        onChange={updateQueryString}
      />
      {loading ? (
        <Loader />
      ) : searchResults.length === 0 && movieName ? (
        <h2>No results</h2>
      ) : (
        <div className={styles.movieList}>
          <MovieList movies={searchResults} />
        </div>
      )}
    </div>
  );
};
export default Movies;
