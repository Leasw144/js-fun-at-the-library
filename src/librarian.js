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

    return `Yes, we have ${book}`
  }
}

module.exports = Librarian;