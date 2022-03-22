var fs = require("fs");
var quotesLib = require("./lib/quotes/index.js");
var mathLib = require("./lib/math.js");

var app = {};

app.config = {
    intervalTime: process.argv[2] ? process.argv[2] : 1000,
};

app.printQuote = function() {
    var allQuotes = quotesLib.allQuotes();
    var numOfQuotes = allQuotes.length;
    var randomNum = mathLib.getRandomNumber(numOfQuotes);

    console.log(allQuotes[randomNum - 1]);
};

app.init = function () {
    fs.appendFile(__dirname + "/log.txt",new Date() + "=>" + app.config.intervalTime + "\r\n",
    function (err) {
        if(err) console.log("Error", err);
        console.log("File updated");
    });
    setInterval(app.printQuote, app.config.intervalTime);
};

app.init();

// console.log(quotesLib.allQuotes());