require('dotenv').config();
require('./config/database');

const fetch = require("node-fetch");
const Book = require('./models/book');
const API_KEY = process.env.API_KEY;

(async function () {
  await Book.deleteMany({});
  // To return different books on the home page, change these genres here and in controllers/books/js
  const genres = ['Fiction', 'Poetry', 'Historical', 'General', 'Computers', 'Biography & Autobiography', 'Literary Criticism', 'Thrillers']
  const bookIdsByGenre = []; // holds 'categories' and respective Ids

  try {
    for (const genre of genres) {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=20&key=${API_KEY}`) // Returns 40 books each genre
      const data = await response.json()
      const books = data.items; // Access array of books
      const ids = books.map(book => book.id) // Gets array of Ids to search for books individually
      bookIdsByGenre.push({ [genre]: ids })
    }

    // function sleep(ms) {
    //   return new Promise(resolve => setTimeout(resolve, ms));
    // }
    const promises = [];
    bookIdsByGenre.forEach(book => {
      Object.values(book).forEach(arrOfIds => {
        arrOfIds.forEach(id => {
          promises.push(fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`).then(res => res.json()))
        })
      })
    })

    let books = await Promise.all(promises);
    books = books.filter(book => book.id && book.volumeInfo &&
      book.volumeInfo.title && book.volumeInfo.authors &&
      book.volumeInfo.publisher && book.volumeInfo.publishedDate &&
      book.volumeInfo.description && book.volumeInfo.categories &&
      book.volumeInfo.averageRating && book.volumeInfo.imageLinks
    );

    for (const book of books) {
      let newCategories = book.volumeInfo.categories
      newCategories = newCategories.reduce((acc, cat) => acc.concat(cat.split(' / ')), [])
      newCategories = [...new Set(newCategories)]
      const bookDoc = await Book.create(
        {
          apiId: book.id, title: book.volumeInfo.title, authors: book.volumeInfo.authors,
          publisher: book.volumeInfo.publisher, publishedDate: book.volumeInfo.publishedDate,
          description: book.volumeInfo.description, categories: newCategories, rating: book.volumeInfo.averageRating,
          imageLinks: book.volumeInfo.imageLinks
        }
      )
    }

  } catch (err) {
    console.log(err)
  }

  process.exit();
})();