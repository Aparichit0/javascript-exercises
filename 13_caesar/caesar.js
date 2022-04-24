const caesar = function (str, shiftFactor) {
    let shiftStr = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        let AToZ = 64 < charCode && charCode <= 90;
        let aToz = 96 < charCode && charCode <= 122;
        let charIndex = charCode + shiftFactor;

        if (AToZ || aToz) {
            //postive shift balance
            if (AToZ && charIndex <= 64) charIndex += 26;
            if (aToz && charIndex <= 96) charIndex += 26;
            //negative shift balance
            if (AToZ && 90 < charIndex) charIndex -= 26;
            if (aToz && 122 < charIndex) charIndex -= 26;
            //alphabatic character shift
            shiftStr += String.fromCharCode(charIndex);
        } else {
            //skip non-alphabatic charcters
            shiftStr += str.charAt(i);
        };
    };
    return shiftStr;
};

// Do not edit below this line
module.exports = caesar;
