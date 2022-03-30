# Assignment #3
## By Elizabeth Francisco

This assignment will be done as individuals, it will require you to create a basic Node.js application.

### Overview:

This assignment is a basic Node.js application that will be run entirely on the command line. It makes a request from an API from RapidAPI and will display an array with details about a country's population, its world ranking in highest population, and its global percentage. 

Type in node app.js then an country name. 
i.e. node app.js Mexico

For country names that are abbreviated, they must be spelled and placed inside quotation marks. 
i.e. node app.js "United States"

Every action is stored as data through a log.txt file, which will appear upon testing.

### Purpose:

This assignment will introduce students the basic fundamentals of Node.js including the command line, package.json, process, request, and fs.

### Process:

This assignment will require Node.js and the command line, it will not include the creation of a web page. All visuals and interactivity will be done through the terminal.

You will build a simple command line tool which makes a request to an API, display content, and stores the data in a text file! We will be using the following modules:

fs - for reading and writing to a file process - for gathering arguments from the command line axios - for making API requests (this is an external module)

This application should accept a command line argument using process.argv. For example:

node app.js cars

When the above line is used to start your application, the terms “cars” will be available in your Node.js code as the third parameter (third because there are two default parameters).

The command line argument will be used as a search term that your application will use to make an API request. If the API returns search results, your application should display them, and save the result to a .txt file. If it doesn't find a result, it should log a message to the console telling the user that no result was found.

