import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../services/api';
import styles from './Reviews.module.css';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieReviews();
  }, [movieId]);
  return (
    <div className={styles.reviewsContainer}>
      {reviews.length !== 0 && (
        <div>
          <h2>Movie Reviews</h2>
          <ul className={styles.reviewsList}>
            {reviews.map(review => (
              <li key={review.id} className={styles.reviewItem}>
                <p className={styles.texty}>{review.author}</p>
                <div className={styles.comment}>
                  <p>{review.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && <div>No reviews found</div>}
    </div>
  );
};

export default Reviews;
