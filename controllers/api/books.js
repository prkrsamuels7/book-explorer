const Book = require('../../models/book');
var fetch = require("node-fetch");
const API_KEY = process.env.API_KEY;

module.exports = {
  getBooksByGenre,
}

async function getBooksByGenre(req, res) {
  const genres = ['fantasy', 'classics', 'mystery', 'nonfiction', 'science fiction', 'graphic novel', 'biographies', 'fantasy']
  const bookIdsByGenre = [];
  for(const genre of genres) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=${API_KEY}`)
    const data = await response.json()
    const books = data.items;
    const ids = []
    books.map((book, idx) => {
      ids[idx] = book.id
    })
    bookIdsByGenre.push({genre : ids}) // WHY DOES GENRE NOT SHOW UP AS THE STRING VERSION IN THE GENRES ARRAY FROM ABOVE
  }
  res.json(bookIdsByGenre);
}
