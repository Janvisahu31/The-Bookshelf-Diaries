import React from 'react';

function ReviewDetail({ review }) {
  return (
    <div>
      <h2>{review.title}</h2>
      <p><strong>Author:</strong> {review.author}</p>
      <p>{review.content}</p>
    </div>
  );
}

export default ReviewDetail;
