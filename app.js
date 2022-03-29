var fs = require("fs");
var countryLib = require("./lib/quotes/index.js");
var mathLib = require("./lib/math.js");

var app = {};

app.config = {
    country: process.argv[2] ? process.argv[2] : "Canada",
};

app.printCountry = function() {
    countryLib.countryPop(app.config.country);
    
};

app.init = function () {
    fs.appendFile(__dirname + "/log.txt",new Date() + "=>" + app.config.country + "\r\n",
    function (err) {
        if(err) console.log("Error", err);
        console.log("File updated");
    });
    app.printCountry();
};

app.init();

