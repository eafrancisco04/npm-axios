var quotesLib = require("./lib/quotes/index.js");
var mathLib = require("./lib/math.js");

var app = {}

app.config = {
    intervalTime: process.argv[2] ? process.argv[2] : 1000,
};

app.init = function () {
    setInterval(() => {
        console.log(quotesLib.allQuotes()[1]);
    }, app.config.intervalTime);
};

app.init();

// console.log(quotesLib.allQuotes());