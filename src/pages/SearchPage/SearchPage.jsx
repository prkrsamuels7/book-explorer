import { useState } from 'react'
import * as booksAPI from '../../utilities/books-api'
import './SearchPage.css'


export default function SearchPage() {
  const [title, setTitle] = useState('')
  const [books, setBooks] = useState([])

  // this function runs everytime title state is updated
  // Needs to go inside of useEffect
  async function handleSearchTitle(evt) {
    evt.preventDefault();
    // search is currently returning all books with rating of 3
    const books = await booksAPI.search(title);
    setBooks(books);
    setTitle('')
  }
  

  console.log(books)

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
    </>
  );
}