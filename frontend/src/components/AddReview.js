import React, { useState } from 'react';

function AddReview({ addReview }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ title, author, content });
    setTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Review</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={e => setContent(e.target.value)}></textarea>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default AddReview;
