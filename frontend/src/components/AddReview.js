// src/components/AddReview.js
import React, { useState } from 'react';

function AddReview({ addReview }) {
  const [title, setTitle] = useState('');
  const [booktitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ title, author, content });
    setTitle('');
    setBookTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <div className="container mt-3">
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Book Title:</label>
          <input type="text" className="form-control" value={booktitle} onChange={e => setBookTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Author:</label>
          <input type="text" className="form-control" value={author} onChange={e => setAuthor(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Content:</label>
          <textarea className="form-control" value={content} onChange={e => setContent(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
}

export default AddReview;
