// C:\Users\Ray\Downloads\jsshell-win32>js
var something_to_say // first I define a variable
something_to_say="something"; //then I assign a value to a variable
//alert(something_to_say);
function nothingfunction(something_to_say){  //then I define the function
return something_to_say
}
nothingfunction("hello"); //call the function

var greeting = nothingfunction("hello"); //assign this functions result to a new variable.

var alert = function(s){WScript.Echo(s)} //introduce Windows Script Host

alert(greeting);
