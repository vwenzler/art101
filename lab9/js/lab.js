/*
 * Author: Vincent Wenzler
 *Created: 1 November 2021
 *License: Public Domain
 */

//find div "output" Assign variable
var outputEl = document.getElementById('output');

//create new element assign a vatiable
var new1El = document.createElement("h1");

//creat parent node
var head1 = document.createTextNode("Trust me this is supposed to be here...");

//append child node to parent
new1El.appendChild(head1);
outputEl.appendChild(new1El);

var new2El = document.createElement("p");

var textline = document.createTextNode("Really, its just the output of my javascript code");

new2El.appendChild(textline);
outputEl.appendChild(new2El);

new1El.style.color = "#E5CB3E";
new2El.style.color = "#149390"
