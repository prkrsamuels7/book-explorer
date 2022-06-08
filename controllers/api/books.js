const Book = require('../../models/book');
var fetch = require("node-fetch");
const API_KEY = process.env.API_KEY;

module.exports = {
  getBookById,
  getBooksByGenre,
}

async function getBookById(req, res) {
  // first check DB for book where the req.params.id matches the apiId property
  // If not, make an API request using req.params.id(apiId) and store in the DB. 
  // res.json(book from DB)
  res.json('bookObject')
}




async function getBooksByGenre(req, res) {
  const genres = ['fiction', 'biography', 'Literary collections', 'poetry', 'computers', 'graphic novel', 'humor', 'comics']
  let books = []
  for(const genre of genres) {
    const bookDocs = Book.find({ categories : [genre] })
    books.push(bookDocs)
  }
  console.log(books)
  res.json(books)
}
