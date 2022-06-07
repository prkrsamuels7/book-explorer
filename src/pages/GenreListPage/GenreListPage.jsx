import { useState, useEffect } from 'react';
import GenreList from '../../components/GenreList/GenreList'
import * as booksAPI from '../../utilities/books-api'

export default function GenreListPage() {
  const [bookList, setBookList] = useState([]);
  
  useEffect(function() {
    async function getBooks() {
      const books = await booksAPI.getBooksByGenre();
      console.log(books);
      setBookList(books);
    }
    getBooks();
  },[]);

  return (
    <>
      <div>
        {bookList.map((books, idx) => (
          <GenreList key={idx} books={books}/>
        ))}
      </div>
    </>
  );
}