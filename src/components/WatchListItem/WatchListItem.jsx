import { Link } from 'react-router-dom'

export default function WatchListItem({ book }) {
  return(
    <article>
      <Link to={`/books/${book.apiId}`}>
        <img
          className="genre-cover"
          src={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : book.imageLinks.thumbnail}
          alt={book.title} />
      </Link>
      <p>{book.title}</p>
    </article>
  )
}