import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={book.imageUrl} 
        alt={book.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
        <p className="text-gray-600 mb-2">by {book.author}</p>
        <p className="text-sm mb-2">Rating: {book.rating}/5</p>
        <p className="text-xs text-gray-500 mb-3">Category: {book.category}</p>
        <Link 
          to={`/book/${book.id}`} 
          className="block text-center bg-black text-white py-1 px-3 rounded hover:bg-gray-800 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;