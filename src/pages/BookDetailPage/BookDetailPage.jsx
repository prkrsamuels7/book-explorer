import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as booksAPI from '../../utilities/books-api'

export default function BookDetailPage() {
  const [book, setBook] = useState(null);
  const { bookApiId } = useParams();

  useEffect(function () {
    async function getBook() {
      const book = await booksAPI.getBookByApiId(bookApiId);
      setBook(book);
    }
    getBook();
  }, [bookApiId]);

  if(!book) return null;
  return (
    <div>
      <h4>Book Details</h4>
      <div><img src={book.imageLinks.small || book.imageLinks.thumbnail} alt={book.title} /></div>
      <div>{book.title}</div>
      <div dangerouslySetInnerHTML={{__html: book.description}}/>
    </div>
  );
}