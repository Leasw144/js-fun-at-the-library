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

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  // calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}

//npm test test/book-test.js