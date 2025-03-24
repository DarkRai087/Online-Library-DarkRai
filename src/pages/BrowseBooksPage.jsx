import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllBooks } from '../redux/booksSlice';
import BookCard from '../components/BookCard';
import CategoryList from '../components/CategoryList';
import SearchBar from '../components/SearchBar';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const allBooks = useSelector(selectAllBooks);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    if (category === 'all') {
      setFilteredBooks(allBooks);
    } else {
      setFilteredBooks(allBooks.filter(book => book.category === category));
    }
    setSearchResults(null);
  }, [category, allBooks]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults(null);
      return;
    }

    const term = searchTerm.toLowerCase();
    const results = allBooks.filter(book => 
      book.title.toLowerCase().includes(term) || 
      book.author.toLowerCase().includes(term)
    );
    setSearchResults(results);
  };

  const displayBooks = searchResults || filteredBooks;
  const categoryTitle = category === 'all' ? 'All Books' : category;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <CategoryList />
        </div>

        <div className="md:col-span-3">
          <h1 className="text-2xl font-semibold mb-4">
            {searchResults ? 'Search Results' : `Browse ${categoryTitle}`}
          </h1>
          
          <SearchBar onSearch={handleSearch} />
          
          {displayBooks.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No books found. Try a different search or category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseBooksPage;