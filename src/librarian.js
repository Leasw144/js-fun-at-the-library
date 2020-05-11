class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library
  }
  
  greetPatron(patron, time) {
    if(time) {
      return `Good morning, ${patron}!`   
    }
    return `Hello, ${patron}!`
  }

  findBook(book) {
    var genreList = Object.keys(this.library.shelves)
    for (var i = 0; i < genreList.length; i++) {
      var shelfGenre = genreList[i]
      var bookOnShelf = this.library.shelves[shelfGenre]
      for (var z = 0; z < bookOnShelf.length; z++) {
        if (bookOnShelf[z].title === book) {
          bookOnShelf.splice(z, 1)
          return `Yes, we have ${book}`
        }
      }
    }
    return `Sorry, we do not have ${book}`
  }

  calculateLateFee(days) {
    return Math.ceil(days * .25)
  }

}

module.exports = Librarian;