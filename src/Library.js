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
  console.log('first log', library.shelves.fantasy)
  if(whatGenre === library.shelves.fantasy) {
    console.log('second log', whatGenre)
    library.shelves.fantasy.push(book)
    }
}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  // checkoutBook: checkoutBook
};