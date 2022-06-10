import { Link } from "react-router-dom";
import "./GenreListItem.css"

export default function GenreListItem({ book }) {
  return (
    <>
      <Link to={`/books/${book.apiId}`} className="genre-link">
        <img
          className="genre-cover"
          src={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : book.imageLinks.thumbnail}
          alt={book.title} />
      </Link>
    </>
  );
}