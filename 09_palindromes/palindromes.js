const palindromes = function () {
    const textArray = arguments[0].toLowerCase().split("");
    //ignore punctuation
    const filterArray = [];
    const ignoreArray = ['!', '.', ','];
    textArray.forEach(char => {
    if (!ignoreArray.includes(char)) filterArray.push(char);     
    });

    const lastPosition = filterArray.length - 1;
    const midPoint = Math.floor(lastPosition / 2);
    //compare first half with last half in reverse
    for (let i = 0; i < midPoint; i++) {
        if (filterArray[i] === filterArray[lastPosition - i]) return true;
        else return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
