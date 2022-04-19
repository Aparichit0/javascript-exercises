const ftoc = function() {
  const fahrenheitTemp = arguments[0];
  let celsiusTemp = (fahrenheitTemp - 32) * 5/9;
  //roundup to one decimmal value
  let roundUp = Math.floor(celsiusTemp * (-10)) / (-10);
  return roundUp;
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
