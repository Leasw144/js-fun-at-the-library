function createLibrary(name, book) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}

function addBook(library, book) {
  var whatGenre = book.genre;
  console.log(whatGenre)
  if(whatGenre === 'fantasy') { 
    library.shelves.fantasy.push(book)
    }
  else if (whatGenre === 'fiction') {
    library.shelves.fiction.push(book)
  }
  else if (whatGenre === 'nonFiction') {
    library.shelves.nonFiction.push(book)
  }
}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  // checkoutBook: checkoutBook
};