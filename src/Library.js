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
  console.log(book)
  return 'You have now checked out ${book} from the Denver Public Library'
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};