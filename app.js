var fs = require("fs");
var quoteLib = require("./lib/quotes/index.js");
var mathLib = require("./lib/math.js");

var app = {};

app.config = {
    word: process.argv[2] ? process.argv[2] : "none",
};

app.printQuote = function() {
    quoteLib.allQuotes(app.config.word);
    // var allQuotes = quotesLib.allQuotes();
    // var numOfQuotes = allQuotes(word).length;
    // var randomNum = mathLib.getRandomNumber(numOfQuotes);

    // console.log(allQuotes[randomNum - 1]);
};

app.init = function () {
    fs.appendFile(__dirname + "/log.txt",new Date() + "=>" + app.config.intervalTime + "\r\n",
    function (err) {
        if(err) console.log("Error", err);
        console.log("File updated");
    });
    app.printQuote();
};

app.init();

// console.log(quotesLib.allQuotes());