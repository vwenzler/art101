/*
 * Author: Vincent Wenzler
 *Created: 15 November 2021
 *License: Public Domain
 */

// returns one of the 4 houses Gryffindor, Ravenclaw, Hufflepuff or Slytherin
// The return is based on the length mod 4
 function sortingHat(str){
   len = str.length;
   mod = len % 4;
   if (mod == 0) {
     return "Gryffindor"
   }
   else if (mod == 1) {
     return "Slytherin"
   }
   else if (mod == 2) {
     return "Ravenclaw"
   }
   else if (mod == 3) {
     return "Hufflepuff"
   }
 }

//Finds the button elemenet and assigns it to the variable oneButton
 var oneButton = document.getElementById("button");
 // adds an event listener to the button for a click
 oneButton.addEventListener("click", function() {
   //gets the input to the text box
   var name = document.getElementById("input").value;
   //applies the sortingHat function to the text input
   var house = sortingHat(name);
   //returns the output with text
   theText = "<p>The Sorting Hat says you are in " + house + ". Good for you.</p>";
   document.getElementById("output").innerHTML = theText;
 })

theText.style.color = "#373386";
