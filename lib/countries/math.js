const { allQuotes } = require(".");

var math = {};

math.getRandomNumber = function(number) {
    return Math.floor( Math.random() * number ) + 1;
};

module.exports = math; 