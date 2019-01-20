/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var person= new Object(); 
person["firstname"] = "Tony" ; 
person["lastname"] = "Alicea" ; 
var firstNameProperty = "firstname" ; 
console.log(person) ; 
console.log(person [firstNameProperty] ) ; 

console.log(person.firstname) ; 
console.log(person.lastname) ; 

person.address = new Object(); 
person.address.street = "111 Main st.";
person.address.city = "New York"; 
person.address. state = "NY"; 
console.log(person.address.street); 
console.log(person.address.city); 
console.log(person["address"]["state"]); 


