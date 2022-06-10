import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as booksAPI from '../../utilities/books-api'
import * as watchlistAPI from '../../utilities/watchlist-api'
import './BookDetailPage.css'

export default function BookDetailPage({ user }) {
  const [book, setBook] = useState(null);
  const { bookApiId } = useParams();
  const [watchlist, setWatchlist] = useState(null); 

  useEffect(function () {
    async function getBook() {
      const book = await booksAPI.getBookByApiId(bookApiId);
      setBook(book);
    }
    getBook();
  }, [bookApiId]);

  const handleAddToWatchlist = async() => {
      const updatedWatchlist = await watchlistAPI.addToWatchlist(user._id, book._id)
      setWatchlist(updatedWatchlist);
  }

  if(!book) return null;
  return (
    <div>
      <div className="flex poster"><img src={book.imageLinks.small || book.imageLinks.thumbnail} alt={book.title} /></div>
      <div>
        <h2>{book.title}</h2>
        <h3>Rating - {book.rating} / 5</h3>
        <h3>Author - {book.authors}</h3>
        <h3>Published Date - {book.publishedDate}</h3>
      </div>
      <div className="description-container">
        <div className="description" dangerouslySetInnerHTML={{__html: book.description}}></div>
      </div>
      <button onClick={handleAddToWatchlist}> + Watchlist</button>
    </div>
  );
}