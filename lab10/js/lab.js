/*
 * Author: Vincent Wenzler and Katana Parker
 *Created: 3 November 2021
 *License: Public Domain
 */

// collects name and sorts interval
  function linearname() {
    //finds the input for the form
    var field = document.getElementById("input");
    //takes the input value
    var name = field.value;
    //changes the value to an array
    var namearray = name
    //splits the array
    var newNameArray = namearray.split('');
    //sorts the array
    var nameArraySort = newNameArray.sort();
    //joins the array
    return sortedName = nameArraySort.join('');
  }

//finds the button element
buttonEl = document.getElementById("mybutton");
//finds the input element
inputEl = document.getElementById("input");
//finds the output element
outputEl = document.getElementById("output");

//detects button press
buttonEl.addEventListener("click", function(){
  var name = inputEl.value;
  var newname = linearname(name);
  outputEl.innerHTML = newname;
});
