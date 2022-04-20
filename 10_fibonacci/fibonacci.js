const fibonacci = function() {
const fibonacciArray = [1,1];
const length = arguments[0];
for (i = 2; i < length; i++){
    let newNum = fibonacciArray[i - 2] + fibonacciArray[i - 1];
    fibonacciArray.push(newNum);
};
return fibonacciArray[length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
