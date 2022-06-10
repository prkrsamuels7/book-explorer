import { useState } from 'react'
import GenreListItem from '../GenreListItem/GenreListitem'
import './GenreList.css'

export default function GenreList({ books, idx }) {
  const genres = ['Fiction', 'Poetry', 'Historical', 'General', 'Computers', 'Biography & Autobiography', 'Literary Criticism', 'Thrillers']

  return (
    <section className="genre-list-container">
      <div className="flex"><h2 className="white-text">{genres[idx]}</h2></div>
      <div className="genre-list">
        {books.map((book, idx) => (
          <GenreListItem key={idx} book={book} />
        ))}
      </div>
    </section>

  );
}