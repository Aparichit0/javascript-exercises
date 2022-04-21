const findTheOldest = function() {
    //throwing error right at the beginning
const person = arguments[0];
const age = [];
let olderPerson;

for (i= 0; i < person.length; i++){
    age[i] = person[i].yearOfDeath - person[i].yearOfBirth;
    //compare nearby person's age
    if (age[i] > age[i+1]) return older = person[i];
    else return olderPerson = person[i+1];
};
return olderPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
