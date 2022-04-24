const caesar = function (str, shiftFactor) {
    let shiftStr = "";
    let CharCode = str.charCodeAt(0);
    shiftStr += String.fromCharCode(CharCode + shiftFactor);
    return shiftStr;
};

// Do not edit below this line
module.exports = caesar;
