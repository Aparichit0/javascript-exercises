const findTheOldest = function () {
    //throwing error right at the beginning
    const person = arguments[0];
    const age = [];
    let olderPerson;
    const currentDate = new Date();
    for (i = 0; i < person.length; i++) {
        if (!person[i].yearOfDeath) {
            //for currently alive person
            age[i] = currentDate.getFullYear() - person[i].yearOfBirth;
        } else {
            age[i] = person[i].yearOfDeath - person[i].yearOfBirth;
        };
    };
    for (i = 0; i < age.length; i++) {
        //compare nearby person's age
        if (age[i + 1]) {
            //if it's the first value within age array
            if (age[i] > age[i + 1]) return older = person[i];
            else return olderPerson = person[i + 1];
        } else {
            //if it's the last value within age array
            if (age[i] > age[i - 1]) return older = person[i];
            else return olderPerson = person[i - 1];
        };
    };
    return olderPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
