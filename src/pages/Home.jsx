import React, { useState, useEffect } from 'react';
import MoviesList from '../components/Movies-list/Movies-list';
import { getTrendingMovies } from '../services/api';
import styles from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Trending Movies</h2>
      <MoviesList movies={trendingMovies} className={styles.moviesList} />
    </div>
  );
};

export default Home;
