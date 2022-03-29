var fs = require("fs");
var quotes = {};

quotes.allQuotes = function (word) {

    const fetch = require('node-fetch');

    const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
        'X-RapidAPI-Key': 'a7cd65d8f5msh29d7c6f25510201p18afacjsn0851cc9ec915'
      }
    };
    
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));

    // var filecontent =  fs.readFileSync(__dirname + '/quotes.txt', "utf8");
    // var arrayOfQuotes = filecontent.split(/\r?\n/)
    // return arrayOfQuotes;

};

module.exports = quotes;