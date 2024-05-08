// src/components/ReviewList.js
import React from 'react';
import { Link } from 'react-router-dom';

function ReviewList({ reviews }) {
  return (
    <div className="container mt-3">
      <h2 className="mb-3">Reviews</h2>
      <ul className="list-group">
        {reviews.map(review => (
          <li className="list-group-item" key={review.id}>
            <Link to={`/reviews/${review.id}`}>{review.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
