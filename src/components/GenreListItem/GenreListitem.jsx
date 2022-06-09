import { Link } from "react-router-dom";
import "./GenreListItem.css"

export default function GenreListItem({ book }) {
  return (
    <article>
      {/**Book Title Needs to be changed to book.apiId */}
      <Link to={`books/${book.apiId}`}>
        <img
          className="genre-cover"
          src={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : book.imageLinks.thumbnail}
          alt={book.title} />
      </Link>
      <p>{book.title}</p>
    </article>
  );
}