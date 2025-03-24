import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Online Library</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/books/all" className="hover:text-gray-300 transition-colors">Browse Books</Link>
          <Link to="/add-book" className="hover:text-gray-300 transition-colors">Add Book</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;