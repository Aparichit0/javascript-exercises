const repeatString = function (text, count) {
    let newString = '';
    if (count < 0) {
     newString = "ERROR";
    } else {
        for (let i = 0; i < count; i++) {
            newString += text;
        };
    };
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
