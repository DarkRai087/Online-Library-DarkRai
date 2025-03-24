import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPopularBooks } from '../redux/booksSlice';
import BookCard from '../components/BookCard';
import CategoryList from '../components/CategoryList';

const HomePage = () => {
  const popularBooks = useSelector(selectPopularBooks);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to the Online Library</h1>
        <p className="text-gray-600">Discover and explore your favorite books</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <CategoryList />
        </div>

        <div className="md:col-span-3">
          <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularBooks.slice(0, 6).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link 
              to="/books/all" 
              className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Browse All Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;