import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as booksAPI from "../../utilities/books-api";
import * as watchlistAPI from "../../utilities/watchlist-api";
import "./BookDetailPage.css";

export default function BookDetailPage({ user }) {
  const [book, setBook] = useState(null);
  const { bookApiId } = useParams();
  const [watchlist, setWatchlist] = useState([]);
  const [watched, setWatched] = useState(null);

  useEffect(
    function () {
      async function getBook() {
        const book = await booksAPI.getBookByApiId(bookApiId);
        setBook(book);
      }
      getBook();

      async function getWatchlistBooks() {
        let books = await watchlistAPI.getBooks(user._id);
        books = books.map((b) => b._id);
        setWatchlist(books);
      }
      getWatchlistBooks();
    },
    [bookApiId, user._id]
  );

  async function handleAddToWatchlist() {
    const updatedWatchlist = await watchlistAPI.addToWatchlist(
      user._id,
      book._id
    );
    setWatched(true);
  }

  if (!book) return null;
  return (
    <>
      <div className="detail-container flex" id="computer">
        <div className="poster flex">
          <img
            src={book.imageLinks.small || book.imageLinks.thumbnail}
            alt={book.title}
          />
          <div className="book-info">
            <h3>{book.title}</h3>
            <h3>{book.authors}</h3>
            <section className="rating">
              <h4>{book.publishedDate}</h4>
              <h4>{book.rating} / 5</h4>
            </section>
            {watchlist.includes(book._id) || watched ? (
              <button>On Watchlist</button>
            ) : (
              <button onClick={handleAddToWatchlist}>+ Watchlist</button>
            )}
          </div>
        </div>
        <div className="description-container">
          <div
            className="description letter-spacing2"
            dangerouslySetInnerHTML={{ __html: book.description }}
          ></div>
        </div>
      </div>

      <div className="detail-container flex" id="phone">
        <div className="poster flex">
          <img
            src={book.imageLinks.small || book.imageLinks.thumbnail}
            alt={book.title}
          />
          <div className="book-info">
            <h3>{book.title}</h3>
            <h3>{book.authors}</h3>
            <section className="rating">
              <h4>{book.publishedDate}</h4>
              <h4>{book.rating} / 5</h4>
            </section>
            {watchlist.includes(book._id) || watched ? (
              <button>On Watchlist</button>
            ) : (
              <button onClick={handleAddToWatchlist}>+ Watchlist</button>
            )}
            <button onClick={handleAddToWatchlist}> + Watchlist</button>
          </div>
        </div>
        <div className="description-container">
          <div
            className="description letter-spacing2"
            dangerouslySetInnerHTML={{ __html: book.description }}
          ></div>
        </div>
      </div>
    </>
  );
}
