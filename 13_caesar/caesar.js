const caesar = function (str, shiftFactor) {
    let shiftStr = "";
    for (let i = 0; i < str.length; i++) {
        let CharCode = str.charCodeAt(i);
        shiftStr += String.fromCharCode(CharCode + shiftFactor);
    }
    return shiftStr;
};

// Do not edit below this line
module.exports = caesar;
