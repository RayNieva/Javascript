/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var sMyString = '<a id="a"><b id="b">hey!</b></a>';
var oParser = new DOMParser();
var oDOM = oParser.parseFromString(sMyString, "text/xml");
// print the name of the root element or error message
dump(oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);
/*
undefined
*/
sMyString
/*
<a id="a"><b id="b">hey!</b></a>
*/
oParser
/*
[object DOMParser]
*/
oDOM
/*
[object XMLDocument]
*/
dump(oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);
