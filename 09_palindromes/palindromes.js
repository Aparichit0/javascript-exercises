const palindromes = function () {
    const textArray = arguments[0].toLowerCase().split("");
    //ignore punctuation
    const filterArray = [];
    const ignoreArray = ['!', '.', ',', ' '];
    textArray.forEach(char => {
        if (!ignoreArray.includes(char)) filterArray.push(char);
    });

    const lastPosition = filterArray.length - 1;
    const midPoint = Math.floor(lastPosition / 2);
    let isPalindrome = true;
    //compare first half with last half in reverse
    palindromeCheck: for (let i = 0; i < midPoint; i++) {
        if (filterArray[i] !== filterArray[lastPosition - i]) {
            isPalindrome = false;
            //break at first enconter of false
            break palindromeCheck;
        };
    };
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
