var quotesLib = require("./lib/quotes/index.js");
var mathLib = require("./lib/math.js");

var app = {}

app.config = {

};

app.init = function () {
    setInterval(() => {
        console.log("Loop");
    }, 1000);
};

app.init();

// console.log(quotesLib.allQuotes());