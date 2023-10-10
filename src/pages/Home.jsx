import React, { useState, useEffect } from 'react';
import MoviesList from '../components/Movies-list/Movies-list';
import { getTrendingMovies } from '../services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchData = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  // Call fetchData directly when the component is rendered
  fetchData();

  return (
    <div>
      <h2>Trending Movies</h2>
      <MoviesList movies={trendingMovies} />{' '}
    </div>
  );
};

export default Home;
