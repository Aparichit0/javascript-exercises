const add = function() {
	const firstNum = arguments[0];
  const secondNum = arguments[1];
  return firstNum + secondNum;
};

const subtract = function() {
  const firstNum = arguments[0];
  const secondNum = arguments[1];
  return firstNum - secondNum;
};

const sum = function() {
  const numArray = arguments[0];
  let sum = 0;
  numArray.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function() {
  const numArray = arguments[0];
  let multiply = 1;
  numArray.forEach(num => {
    multiply *= num;
  });
  return multiply;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
