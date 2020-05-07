function shelfBook(book, genre) {
    if(genre.length >= 3) {
      return false
    }
    genre.unshift(book)
}

function unshelfBook(book, genre) {
  for(var i = 0; i < genre.length; i++) {
    if(genre[i].title === book) {
      genre.splice(i, 1)
    }
  }
  // if(genre.includes(book)) {
  //   genre.map(x => book !== genre)
  //   return genre
  // }
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};

//npm test test/shelf-test.js