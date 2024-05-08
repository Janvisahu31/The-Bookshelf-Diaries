import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewDetail from './components/ReviewDetail';
import AddReview from './components/AddReview';

const initialReviews = [
  { id: 1, title: 'Review One', author: 'Author One', content: 'Content of review one.' },
  { id: 2, title: 'Review Two', author: 'Author Two', content: 'Content of review two.' }
];

function App() {
  const [reviews, setReviews] = useState(initialReviews);

  const addReview = review => {
    const newReview = { ...review, id: reviews.length + 1 };
    setReviews([...reviews, newReview]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ReviewList reviews={reviews} />} />
        <Route path="/reviews/:id" element={<ReviewDetail review={reviews.find(r => r.id === parseInt(window.location.pathname.split("/")[2]))} />} />
        <Route path="/add-review" element={<AddReview addReview={addReview} />} />
      </Routes>
    </Router>
  );
}

export default App;
