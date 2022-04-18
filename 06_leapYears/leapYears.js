const leapYears = function () {
    const year = arguments[0];
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                //divisable by 400
                return true;
            } else {
                //divisable by 100 but not by 400
                return false;
            };
        } else {
            //divisable by 4 only
            return true;
        };
    } else {
        //not divisable by 4
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;
