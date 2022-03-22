var quotesLib = require("./lib/quotes/index.js");
var mathLib = require("./lib/math.js");

var app = {}

app.config = {
    //if process.argv has time given, then follow that. Otherwise, interval is 1 sec
    intervalTime: process.argv[2] ? process.argv[2]: 1000,
};

app.init = function () {
    //repeat a task for 1 second
    setInterval(() => {
        console.log(quotesLib.allQuotes()[1]);
    }, app.config.intervalTime);
};

app.init();

// console.log(quotesLib.allQuotes());