const ftoc = function () {
  const fahrenheitTemp = arguments[0];
  let celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
  //roundup to one decimmal value
  let roundUp = Math.floor(celsiusTemp * (-10)) / (-10);
  return roundUp;
};

const ctof = function () {
  const celsiusTemp = arguments[0];
  let fahrenheitTemp = celsiusTemp * 9 / 5 + 32;
  //roundup to one decimmal value
  let roundUp = Math.floor(fahrenheitTemp * (-10)) / (-10);
  return roundUp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
