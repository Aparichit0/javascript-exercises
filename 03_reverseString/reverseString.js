const reverseString = function(message) {
const toArray = message.split("");
const reverseArray = toArray.reverse();
const reversedMessage = reverseArray.join("");
return reversedMessage;
};

// Do not edit below this line
module.exports = reverseString;
