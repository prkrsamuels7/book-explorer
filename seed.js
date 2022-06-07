require('dotenv').config();
require('./config/database');

const Book = require('./models/book');

(async function() {
  // Code for fetching books from API
  // Return 40 from each genre search
  

  await Book.deleteMany({});
  process.exit();

})();
