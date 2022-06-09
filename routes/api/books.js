const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/books/
router.get('/', booksCtrl.getBooksByGenre);
// GET /api/books/:bookId
router.get('/:apiId', booksCtrl.getBookByApiId);
// GET /api/books/search/bookTitle
router.get('/search/:title', booksCtrl.search);

module.exports = router;