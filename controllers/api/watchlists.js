const Book = require('../../models/book');
const User = require('../../models/user');
const Watchlist = require('../../models/watchlist')

module.exports = {
  addToWatchlist,
  getBooks,
}

async function getBooks(req, res) {
  const list = await Watchlist.findOne({ user: req.params.userId }).populate('books');
  if(list) res.json(list.books);
  else {
    res.json([]);
  }
}


async function addToWatchlist(req, res) {
  const list = await Watchlist.findOne({ user: req.body.userId });
  if (list) {
    if (!list.books.includes(req.body.bookId)) {
      list.books.push(req.body.bookId);
      list.save();
    }
  } else {
    const newList = await Watchlist.create({ user: req.body.userId, books: req.body.bookId });
    res.json(newList);
  }
  res.json(list);
}