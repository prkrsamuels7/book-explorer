import { useState, useEffect } from 'react'
import * as booksAPI from '../../utilities/books-api'
import SearchPageItem from '../../components/SearchPageItem/SearchPageItem'
import './SearchPage.css'


export default function SearchPage() {
  const [title, setTitle] = useState('')
  const [books, setBooks] = useState([])

  // this function runs everytime title state is updated
  async function handleSearchTitle(evt) {
    evt.preventDefault();
    const books = await booksAPI.search(title);
    setBooks(books);
    setTitle('')
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSearchTitle}>
        <input
          className="search-input"
          type="text"
          placeholder="search by book title"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className='search-results'>
        {books.map((book, idx) => (
          <SearchPageItem key={idx} book={book}/>
        ))}
      </div>
    </>
  );
}