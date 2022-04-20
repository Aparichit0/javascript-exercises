const getTheTitles = function () {
    const booksArray = arguments[0];
    const bookTitles = [];
    booksArray.forEach(book => {
        bookTitles.push(book.title);
    });
    return bookTitles;
}
// Do not edit below this line
module.exports = getTheTitles;
