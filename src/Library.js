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

function checkoutBook(library, book) {
  // for(var i = 0; i < library.shelves.fiction; i++) {
    if(library.shelves.fiction[0].title === book) {
      library.shelves.fiction.shift()
      return `You have now checked out ${book} from the ${library.name}`
    }
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
  // }
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};