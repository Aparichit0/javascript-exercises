const fibonacci = function () {
    const fibonacciArray = [1, 1];
    const length = arguments[0];
    for (i = 2; i < length; i++) {
        fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
    };
    return fibonacciArray[length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
