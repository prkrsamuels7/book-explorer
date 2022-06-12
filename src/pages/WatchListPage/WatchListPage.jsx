import { useState, useEffect } from 'react'
import WatchListItem from '../../components/WatchListItem/WatchListItem';
import * as watchlistAPI from '../../utilities/watchlist-api'
import './WatchListPage.css'

export default function WatchListPage({ user }) {
  const [bookList, setBookList] = useState([]);

  useEffect(function () {
    async function getWatchlistBooks() {
      const books = await watchlistAPI.getBooks(user._id);
      setBookList(books);
    }
    getWatchlistBooks();
  }, [user._id])

  return (
    <div className='watchlist'>
      <h1>Watchlist</h1>
      <div className='watchlist-results'>
        {bookList.map((book, idx) => (
          <WatchListItem key={idx} book={book} />
        ))}
      </div>
    </div>
  );
};