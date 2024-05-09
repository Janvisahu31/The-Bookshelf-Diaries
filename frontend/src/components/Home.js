import React from 'react';
import genres from '../data/booksData';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-10">Book Genres and Reviews</h1>
      {genres.map(genre => (
        <div key={genre.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{genre.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {genre.books.map(book => (
              <div key={book.id} className="p-4 border rounded shadow-lg">
                <h3 className="text-xl font-bold">{book.title}</h3>
                <p className="text-sm font-light">Author: {book.author}</p>
                <p className="text-gray-600 mt-2">{book.review}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
