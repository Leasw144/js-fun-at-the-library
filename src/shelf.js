function shelfBook(book, genre) {
  var scifiShelf = []
  if(scifiShelf.length >= 3) {
    return false
  }
  genre.unshift(book)

}

module.exports = {
  shelfBook: shelfBook,
  // unshelfBook: unshelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};

//npm test test/shelf-test.js