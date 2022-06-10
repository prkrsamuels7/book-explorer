const Book = require('../../models/book');
var fetch = require("node-fetch");
const API_KEY = process.env.API_KEY;

module.exports = {
  search,
  getBookByApiId,
  getBooksByGenre,
}

async function search(req, res) {
  const dbBooks = await Book.find({ title: { "$regex": req.params.title, "$options": "i" } });
  const dbApiIds = dbBooks.map(book => book.apiId) // Gets api Ids of matching books

  try {
    const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${req.params.title}&maxResults=${30}&key=${API_KEY}`).then(res => res.json());
    let apiIds = data.items.map(book => book.id) // Grabbing API ids for each book from api query
    apiIds = apiIds.filter(id => !dbApiIds.includes(id)); // filters for unique APIids

    if (apiIds.length) {
      //Repeat code from Seed.js
      let apiBooks = []
      for (const id of apiIds) {
        const book = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`).then(res => res.json())
        apiBooks.push(book);
      }

      //Repeat
      apiBooks = apiBooks.filter(book => book.id && book.volumeInfo &&
        book.volumeInfo.title && book.volumeInfo.authors &&
        book.volumeInfo.publisher && book.volumeInfo.publishedDate &&
        book.volumeInfo.description && book.volumeInfo.categories &&
        book.volumeInfo.averageRating && book.volumeInfo.imageLinks
      );

      //Repeat
      for (const book of apiBooks) {
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
    }
  } catch (err) {
    console.log(err)
  }


  const results = await Book.find({ title: { "$regex": req.params.title, "$options": "i" } });

  res.json(results);
}

async function getBookByApiId(req, res) {
  const book = await Book.findOne({ apiId: req.params.apiId })
  res.json(book)
}

async function getBooksByGenre(req, res) {
  // To return different books on the home page, change these genres here and in the seed file
  const genres = ['Fiction', 'Poetry', 'Historical', 'General', 'Computers', 'Biography & Autobiography', 'Literary Criticism', 'Thrillers']
  let books = []
  for (const genre of genres) {
    const bookDocs = await Book.find({ categories: genre }).limit(30)
    books.push(bookDocs)
  }
  res.json(books)
}
