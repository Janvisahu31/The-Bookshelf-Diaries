import React from 'react';
import { Link } from 'react-router-dom';

function ReviewList({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <Link to={`/reviews/${review.id}`}>{review.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
