const Book = require('../../models/book');
var fetch = require("node-fetch");
const API_KEY = process.env.API_KEY;

module.exports = {
  search,
  getBookByApiId,
  getBooksByGenre,
}

async function search(req, res) {
  // str = req.params.title;
  // var re = newRegExp(str, "g");
  const books = await Book.find({rating: 3})
  console.log(books)
  res.json(books)
}

// This is used only for clicking on a book cover in a list
// genreListPage, or searchPage
async function getBookByApiId(req, res) {
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
