const sumAll = function () {
    if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
        if (arguments[0] >= 0 && arguments[1] >= 0) {
            let smallNum;
            let bigNum;
            //determine which argument is small and which one is big
            if (arguments[0] < arguments[1]) {
                smallNum = arguments[0];
                bigNum = arguments[1]
            } else {
                smallNum = arguments[1];
                bigNum = arguments[0]
            };
            let sum = 0;
            for (let i = smallNum; i <= bigNum; i++) {
                sum += i;
            }
            return sum;
        } else {
            //if any or both are negative integers
            return "ERROR";
        };
    } else {
        //if any or both are not integers
        return "ERROR";
    };
};

// Do not edit below this line
module.exports = sumAll;
