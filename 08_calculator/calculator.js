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
	const num = arguments[0];
  const power = arguments[1];
  let poweredNum = 1;
  for (let i = 0; i < power; i++){
    poweredNum *= num;
  };
  return poweredNum;
};

const factorial = function() {
  const num = arguments[0];
  let factorialNum = 1;
  for (let i = 0; i < num; i++){
   factorialNum *= (num - i);
  }
  return factorialNum;
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
