import { useState, useEffect } from 'react';
import GenreList from '../../components/GenreList/GenreList'
import * as booksAPI from '../../utilities/books-api'
import './GenreListPage.css'

export default function GenreListPage() {
  const [bookList, setBookList] = useState([]);
  
  useEffect(function() {
    async function getBooks() {
      const books = await booksAPI.getBooksByGenre();
      setBookList(books);
    }
    getBooks();
  },[]);

  return (
    <>
      <div className="genre-list-page-container">
        {bookList.map((books, idx) => (
          <GenreList key={idx} books={books} idx={idx}/>
        ))}
      </div>
    </>
  );
}