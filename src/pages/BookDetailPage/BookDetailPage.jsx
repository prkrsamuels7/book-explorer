import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as booksAPI from '../../utilities/books-api'

export default function BookDetailPage() {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();

  useEffect(function () {
    async function getBook() {
      const book = await booksAPI.getBookById(bookId);
      setBook(book);
    }
    getBook();
  }, [bookId]);

  return (
    <div>
      <h4>Book Details</h4>
      <p>
        {bookId}
      </p>
      <p>
        {book}
      </p>
    </div>
  );
}