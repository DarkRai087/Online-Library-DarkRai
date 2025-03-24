import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/books';

const CategoryList = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-3">Categories</h2>
      <ul className="space-y-2">
        <li>
          <Link 
            to="/books/all" 
            className="block hover:bg-gray-200 p-2 rounded transition-colors"
          >
            All Books
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Link 
              to={`/books/${category}`} 
              className="block hover:bg-gray-200 p-2 rounded transition-colors"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;