var fs = require("fs");
var quotes = {};

quotes.allQuotes = function () {

    const fetch = require('node-fetch');

    const url = 'https://jikan1.p.rapidapi.com/meta/requests/anime/today';
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'jikan1.p.rapidapi.com',
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