function shelfBook(book, genre) {
  genre.length >= 3 ? false : genre.unshift(book)
}

function unshelfBook(book, genre) {
  for(var i = 0; i < genre.length; i++) {
    genre[i].title === book ? genre.splice(i, 1) : false;
  }
}

function listTitles(fantasyShelf) {
  return `${fantasyShelf[0].title}, ${fantasyShelf[1].title}, ${fantasyShelf[2].title}`
}

function searchShelf(genre, book) {
  for(var i = 0; i < genre.length; i++) {
    console.log(genre[i].title, book)
    if (genre[i].title === book) {
      return true
    } 
  }
  return false
}
module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};

//npm test test/shelf-test.js