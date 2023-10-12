import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Cast from 'components/Cast/Cast';
import Reviews from './Reviews/Reviews';
import MovieDetails from 'pages/MovieDetails';
import { Routes, Route, Navigate } from 'react-router';
import { lazy } from 'react';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default App;
