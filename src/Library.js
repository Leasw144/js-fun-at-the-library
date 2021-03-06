function createLibrary(name) {
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
  var bookGenre = book.genre;
  if(bookGenre === 'fantasy') { 
    library.shelves.fantasy.push(book)
    }
  else if (bookGenre === 'fiction') {
    library.shelves.fiction.push(book)
  }
  else if (bookGenre === 'nonFiction') {
    library.shelves.nonFiction.push(book)
  }
}

function checkoutBook(library, book) {
  var genreList = Object.keys(library.shelves)
  for (var i = 0; i < genreList.length; i++) {
    var shelfGenre = genreList[i]
    var bookOnShelf = library.shelves[shelfGenre]
    for (var z = 0; z < bookOnShelf.length; z++) {
      if (bookOnShelf[z].title === book) {
        bookOnShelf.splice(z, 1)
        return `You have now checked out ${book} from the ${library.name}`
      }
    }
  }
  return "Sorry, there are currently no copies of The Fifth Season available at the Denver Public Library"
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};