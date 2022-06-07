const Book = require('../../models/book');
var fetch = require("node-fetch");
const API_KEY = process.env.API_KEY;

module.exports = {
  getBooksByGenre,
}

async function getBooksByGenre(req, res) {
  const genres = ['fantasy', 'classics', 'mystery', 'nonfiction', 'science fiction', 'graphic novel', 'biographies']
  // const bookIdsByGenre = [];
  // const bookData = [];
  // try {
  //   for (const genre of genres) {
  //     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=${API_KEY}`)
  //     if (!response.ok) {
  //       console.log(response)
  //       return res.json(bookIdsByGenre)
  //     }
  //     const data = await response.json()
  //     const books = data.items;
  //     const ids = books.map(book => book.id)
  //     bookIdsByGenre.push({ [genre]: ids })
  //   }
  //   const promises = [];
  //   bookIdsByGenre.forEach((book) => {
  //     Object.values(book).forEach(arrOfIds => {
  //       arrOfIds.forEach(id => {
  //         promises.push(fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`).then(res => res.json()))
  //       })
  //     })
  //   })
  //   const books = await Promise.all(promises);
  //   console.log(books, books.length)
  // } catch(err) {
  //   console.log(err)
  // }
  // for(let i = 0; i < bookIdsByGenre.length; i++) {
  //   let idList = bookIdsByGenre[i][genres[i]]
  //   for(let bookId of idList) {
  //     const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`)
  //     const data = await response.json()
  //     let book = new Object();
  //     book.genre = genres[i];
  //     book.id = data.id;
  //     if(data.volumeInfo) {
  //       book.title = data.volumeInfo.title;
  //       book.poster = data.volumeInfo.imageLinks.small;
  //     }
  //     bookData.push(book)
  //   }
  // }
  const books = [
    [
      {
        title: 'book title1',
        poster: "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73IycTHZLUHjbycHMMi_OYto8-zKDe32vBZwMyi8OJo43KLc6xVlImJXLtpbozvtqzafd6ZKPjFnoyomvnTB575ofQzVPr47dKTTMvJ0ETHjhUaSqGOkPNAde_iSjJO-S4ix85E&source=gbs_api",
        genre: 'fiction', 
      },
      {
        title: 'book title2',
        poster: "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73IycTHZLUHjbycHMMi_OYto8-zKDe32vBZwMyi8OJo43KLc6xVlImJXLtpbozvtqzafd6ZKPjFnoyomvnTB575ofQzVPr47dKTTMvJ0ETHjhUaSqGOkPNAde_iSjJO-S4ix85E&source=gbs_api",
        genre: 'fiction', 
      },
      {
        title: 'book title3',
        poster: "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73IycTHZLUHjbycHMMi_OYto8-zKDe32vBZwMyi8OJo43KLc6xVlImJXLtpbozvtqzafd6ZKPjFnoyomvnTB575ofQzVPr47dKTTMvJ0ETHjhUaSqGOkPNAde_iSjJO-S4ix85E&source=gbs_api",
        genre: 'fiction', 
      },
    ],
    [
      {
        title: 'book title4',
        poster: "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73IycTHZLUHjbycHMMi_OYto8-zKDe32vBZwMyi8OJo43KLc6xVlImJXLtpbozvtqzafd6ZKPjFnoyomvnTB575ofQzVPr47dKTTMvJ0ETHjhUaSqGOkPNAde_iSjJO-S4ix85E&source=gbs_api",
        genre: 'fantasy', 
      },
      {
        title: 'book title5',
        poster: "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73IycTHZLUHjbycHMMi_OYto8-zKDe32vBZwMyi8OJo43KLc6xVlImJXLtpbozvtqzafd6ZKPjFnoyomvnTB575ofQzVPr47dKTTMvJ0ETHjhUaSqGOkPNAde_iSjJO-S4ix85E&source=gbs_api",
        genre: 'fantasy', 
      },
      {
        title: 'book title6',
        poster: "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73IycTHZLUHjbycHMMi_OYto8-zKDe32vBZwMyi8OJo43KLc6xVlImJXLtpbozvtqzafd6ZKPjFnoyomvnTB575ofQzVPr47dKTTMvJ0ETHjhUaSqGOkPNAde_iSjJO-S4ix85E&source=gbs_api",
        genre: 'fantasy', 
      },
    ],
    [
      {
        title: 'book title7',
        poster: "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73IycTHZLUHjbycHMMi_OYto8-zKDe32vBZwMyi8OJo43KLc6xVlImJXLtpbozvtqzafd6ZKPjFnoyomvnTB575ofQzVPr47dKTTMvJ0ETHjhUaSqGOkPNAde_iSjJO-S4ix85E&source=gbs_api",
        genre: 'classic', 
      },
      {
        title: 'book title8',
        poster: "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73IycTHZLUHjbycHMMi_OYto8-zKDe32vBZwMyi8OJo43KLc6xVlImJXLtpbozvtqzafd6ZKPjFnoyomvnTB575ofQzVPr47dKTTMvJ0ETHjhUaSqGOkPNAde_iSjJO-S4ix85E&source=gbs_api",
        genre: 'classic', 
      },
      {
        title: 'book title9',
        poster: "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73IycTHZLUHjbycHMMi_OYto8-zKDe32vBZwMyi8OJo43KLc6xVlImJXLtpbozvtqzafd6ZKPjFnoyomvnTB575ofQzVPr47dKTTMvJ0ETHjhUaSqGOkPNAde_iSjJO-S4ix85E&source=gbs_api",
        genre: 'classic', 
      },
    ],
  ];

  res.json(books);
}
