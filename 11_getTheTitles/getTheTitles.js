const getTheTitles = function () {
    const booksArray = arguments[0];
    const bookTitles = [];
    for (let i = 0; i < booksArray.length; i++) {
        bookTitles[i] = booksArray[i].title;
    };
    return bookTitles;
}
// Do not edit below this line
module.exports = getTheTitles;
