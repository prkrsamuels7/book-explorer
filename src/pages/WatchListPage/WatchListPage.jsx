import { useState, useEffect } from 'react'
import WatchListItem from '../../components/WatchListItem/WatchListItem';
import * as watchlistAPI from '../../utilities/watchlist-api'

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
    <>
      {bookList.map((book, idx) => (
        <WatchListItem key={idx} book={book}/>
      ))}
    </>
  );
};