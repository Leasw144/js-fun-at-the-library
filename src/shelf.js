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
}

function listTitles(fantasyShelf) {
  console.log(fantasyShelf)
  return `${fantasyShelf[0].title}, ${fantasyShelf[1].title}, ${fantasyShelf[2].title}`
}

function searchShelf() {
  for(var i = 0; i < )
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};

//npm test test/shelf-test.js