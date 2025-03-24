# live 
https://online-library-dark-rai.vercel.app/

# Online Library System

This is a React application that simulates an online library system with book browsing, searching, and adding functionality.

## Features

- Home page with welcome message, categories, and popular books
- Browse books by category with dynamic routing
- Search functionality to filter books by title or author
- Book details page to view more information about a selected book
- Add book form with validation and Redux state management
- 404 page for undefined routes

## Technologies Used

- React
- React Router
- Redux Toolkit
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/online-library.git
   cd online-library
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Dependencies

- react
- react-dom
- react-router-dom
- redux
- react-redux
- @reduxjs/toolkit
- tailwindcss

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── BookCard.jsx
│   ├── CategoryList.jsx
│   └── SearchBar.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── BrowseBooksPage.jsx
│   ├── BookDetailsPage.jsx
│   ├── AddBookPage.jsx
│   └── NotFoundPage.jsx
├── redux/
│   ├── store.js
│   └── booksSlice.js
├── data/
│   └── books.js (dummy data)
├── App.jsx
└── index.js
```

## Application Preview

The application uses a minimalist black and white aesthetic with Tailwind CSS for styling. The design is clean, responsive, and user-friendly.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
