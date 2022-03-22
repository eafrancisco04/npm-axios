var fs = require("fs");
var quotes = {};

quotes.allQuotes = function () {
    var filecontent =  fs.readFileSync(__dirname + '/quotes.txt', "utf8");
    var arrayOfQuotes = filecontent.split(/\r?\n/)
    return arrayOfQuotes;

};

module.exports = quotes;