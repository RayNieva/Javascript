var args = process.argv.slice(2);

var name = args[0];
var age = args[1];
var diff = 100 - age;

console.log('Hello ' + name + ', you will be 100 in ' + diff + ' years!');
