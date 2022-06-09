import { Link } from 'react-router-dom'


export default function SearchPageItem({ book }) {
  return (
    <article>
      <Link to={`/books/${book.apiId}`}>
        <img
        className=""
        src={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : book.imageLinks.smallThumbnail}
        alt={book.title} />
      </Link>
      <p>{book.title}</p>
    </article>
  );
}