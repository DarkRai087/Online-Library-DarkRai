import { createSlice } from '@reduxjs/toolkit';
import { books as initialBooks } from '../data/books';

const initialState = {
  books: initialBooks,
  nextId: initialBooks.length + 1,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: state.nextId,
        ...action.payload,
        rating: parseFloat(action.payload.rating),
      };
      state.books.push(newBook);
      state.nextId += 1;
    },
  },
});

export const { addBook } = booksSlice.actions;

export const selectAllBooks = (state) => state.books.books;
export const selectBooksByCategory = (state, category) => 
  state.books.books.filter(book => book.category === category);
export const selectBookById = (state, bookId) => 
  state.books.books.find(book => book.id === parseInt(bookId));
export const selectPopularBooks = (state) => 
  state.books.books.filter(book => book.popular);

export default booksSlice.reducer;