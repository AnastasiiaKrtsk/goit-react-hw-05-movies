import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'c52f4f345a0345192b8a73a62aaa4e80';

const params = {
  params: {
    api_key: KEY,
    language: 'en-US',
  },
};
//trending movies request
export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  return response.data.results;
};
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// movie details request
export const getMovieById = async movieId => {
  const res = await axios
    .get(`/movie/${movieId}?api_key=${KEY}`)
    .catch(error => {
      throw new Error('an error occured...');
    });
  return res.data;
};

//cast info request
export const getCredits = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );

  return data.cast;
};

//reviews request
export const getReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
  return data.results;
};

// search movies request
export const getMoviesByName = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};
