// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewDetail from './components/ReviewDetail';
import AddReview from './components/AddReview';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';


function App() {
  const [reviews, setReviews] = useState([
    { id: 1, title: 'Review One', author: 'Author One', content: 'Content of review one.' },
    { id: 2, title: 'Review Two', author: 'Author Two', content: 'Content of review two.' }
  ]);

  const addReview = review => {
    const newReview = { ...review, id: reviews.length + 1 };
    setReviews([...reviews, newReview]);
  };

  return (
    <AuthProvider>
    <Router>
    <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <div className="p-4">
      <Routes>
        <Route path="/review" element={<ReviewList reviews={reviews} />} />
        <Route path="/" element={<Home />} />
        <Route path="/reviews/:id" element={<ReviewDetail reviews={reviews} />} />
        <Route path="/add-review" element={<AddReview addReview={addReview} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
      </div>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
