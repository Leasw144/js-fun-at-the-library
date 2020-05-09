function shelfBook(book, genre) {
  genre.length >= 3 ? false : genre.unshift(book)
}

function unshelfBook(book, genre) {
  for(var i = 0; i < genre.length; i++) {
    genre[i].title === book ? genre.splice(i, 1) : false;
  }
}

function listTitles(fantasyShelf) {
  console.log(fantasyShelf[0].title)
  var newShelf = []
  for(var i = 0; i<fantasyShelf.length; i++) {
    newShelf.push(fantasyShelf[i].title)
  }
  console.log(newShelf)
  newShelf.join()
  fantasyShelf = newShelf
  
  // return `${fantasyShelf[0].title}, ${fantasyShelf[1].title}, ${fantasyShelf[2].title}`
}

function searchShelf(genre, book) {
  for(var i = 0; i < genre.length; i++) {
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