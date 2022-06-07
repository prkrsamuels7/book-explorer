import { useState, useEffect } from 'react';
import GenreList from '../../components/GenreList/GenreList'
import * as booksAPI from '../../utilities/books-api'

export default function GenreListPage() {
  const [books, setBooks] = useState([]);
  
  useEffect(function() {
    async function getBooks() {
      const books = await booksAPI.getBooksByGenre();
      console.log(books);
      setBooks(books);
    }
    getBooks();
  },[]);

  return (
    <>
      
    </>
  );
}