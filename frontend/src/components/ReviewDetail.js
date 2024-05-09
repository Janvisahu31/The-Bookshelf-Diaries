// src/components/ReviewDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ReviewDetail({ reviews }) {
  let { id } = useParams();
  const review = reviews.find(r => r.id === parseInt(id));

  if (!review) {
    return <div className="alert alert-danger">No review found</div>;
  }

  return (
    <div className="p-4">
      <h2 className="font-bold">{review.title}</h2>
      <p><strong>Author:</strong> {review.author}</p>
      <p>BOOK Title:{review.booktitle}</p>
      <p>{review.content}</p>

    </div>
  );
}

export default ReviewDetail;
