function createTitle(title) {
  return (`The ${title}`)
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character
}
var reviews = []
function saveReview(commentary, reviews) {
  if(!reviews.includes(commentary)) {
    reviews.push(commentary)
  }
}

function calculatePageCount(title) {
 var length = title.length * 20;
  return length;
}

function writeBook(bookTitle, bookCharacter) {
  var mahBook = {
    title: bookTitle,
    mainCharacter:bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: 'fantasy',
  }
  // mahBook.pageCount = calculatePageCount(bookTitle)
  return mahBook
}

function editBook(book) {
  
  return book.pageCount = book.pageCount * .75
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}

//npm test test/book-test.js