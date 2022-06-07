const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.get('/', booksCtrl.getBooksByGenre);

module.exports = router;