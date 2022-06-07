import { useState } from 'react'
import GenreListItem from '../GenreListItem/GenreListitem'
import './GenreList.css'

export default function GenreList({ books }) {
  return (
    <>
      <h1>{books[1].genre}</h1>
      <div className="genre-list">
        {books.map((book, idx) => (
          <GenreListItem key={idx} book={book} />
        ))}
      </div>
    </>
  );
}