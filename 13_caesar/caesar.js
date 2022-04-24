const caesar = function (str, shiftFactor) {
    let shiftStr = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        let AToZ = 64 < charCode && charCode <= 90;
        let aToz = 96 < charCode && charCode <= 122;
        let charIndex = charCode + shiftFactor;

        if (AToZ || aToz) {
            if ((90 < charIndex && charIndex <= 96) || 122 < charIndex) charIndex -= 26;
            shiftStr += String.fromCharCode(charIndex);
        } else {
            shiftStr += str.charAt(i);
        };
    };
    return shiftStr;
};

// Do not edit below this line
module.exports = caesar;
