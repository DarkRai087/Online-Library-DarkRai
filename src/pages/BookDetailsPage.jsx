import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBookById } from '../redux/booksSlice';

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => selectBookById(state, id));

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Book not found</h2>
        <Link 
          to="/books/all" 
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Browse Books
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <img 
              src={book.imageUrl} 
              alt={book.title} 
              className="w-full rounded-md shadow-sm"
            />
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
            
            <div className="mb-4">
              <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm mr-2">
                {book.category}
              </span>
              <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                Rating: {book.rating}/5
              </span>
            </div>
            
            <div className="border-t border-b border-gray-200 py-4 my-4">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{book.description}</p>
            </div>
            
            <button 
              onClick={() => navigate(-1)} 
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Back to Browse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;