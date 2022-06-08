import { Link } from "react-router-dom";

export default function GenreListItem({ book }) {
  return (
    <article>
      {/**Book Title Needs to be changed to book.apiId */}
      <Link to={`books/${book.title}`}>
        <img src={book.poster} alt={book.title} />
      </Link>
      <p>{book.title}</p>
    </article>
  );
}