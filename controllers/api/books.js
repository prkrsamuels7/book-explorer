const Book = require('../../models/book');
var fetch = require("node-fetch");
const API_KEY = process.env.API_KEY;

module.exports = {
  getBookByApiId,
  getBooksByGenre,
}

async function getBookByApiId(req, res) {
  // first check DB for book where the req.params.id matches the apiId property
  // If not, make an API request using req.params.id(apiId) and store in the DB. 
  // res.json(book from DB)
  const book = await Book.findOne({apiId: req.params.apiId})
  res.json(book)
}




async function getBooksByGenre(req, res) {
  // To return different books on the home page, change these genres here and in the seed file
  const genres = ['Fiction', 'Poetry', 'Historical', 'General', 'Computers', 'Biography & Autobiography', 'Literary Criticism', 'Thrillers']
  let books = []
  for(const genre of genres) {
    const bookDocs = await Book.find({ categories : genre }).limit(10)
    books.push(bookDocs)
  }
  res.json(books)
}
