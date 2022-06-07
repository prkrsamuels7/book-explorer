export default function GenreListItem({ book }) {
  return (
    <article>
      <img src={book.poster} alt={book.title}/>
      <p>{book.title}</p>
    </article>
  );
}