const palindromes = function () {
    const textArray = arguments[0].split("");
    const lastPosition = textArray.length - 1;
    const midPoint = Math.floor(lastPosition / 2);
    //compare first half with last half in reverse
    for (let i = 0; i < midPoint; i++) {
        if (textArray[i] === textArray[lastPosition - i]) return true;
        else return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
