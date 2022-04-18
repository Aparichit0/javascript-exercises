const removeFromArray = function () {
    const args = Array.from(arguments);
    const mainArray = args[0];
    //array for rest of the arguments
    const removeArray = args.slice(1, args.length);
    const filterArray = []; 
    //items from mainArray that are not part of removeArray to filterArray
    mainArray.forEach(item => {
        if (!(removeArray.includes(item))){
            filterArray.push(item);
        }
    });
    return filterArray;
};

// Do not edit below this line
module.exports = removeFromArray;
