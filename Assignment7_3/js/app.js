var counter = (function () {
    var count = 0;
    return function () {return count += 1;}
})();

console.log("You have call this function: "+ counter());
console.log("You have call this function: "+ counter());
console.log("You have call this function: "+ counter());
console.log("You have call this function: "+ counter());