var exec = require('child_process').exec;
var userInput = process.argv[2];
eval(userInput);  // intentional vulnerability
exec(userInput);  // intentional vulnerability
