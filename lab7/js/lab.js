/*
 * Author: Vincent Wenzler
 *Created: 20 October
 *License: Public Domain
 */


// removenametype1 - a function that removes everything but the first 3 letters in a name
  function removenametype1(){
    var name = window.prompt("your name seems to have a bit too much meaning");
    console.log("normalName =", normalName);
    //split string into an Array
    var namearray = normalName.split('');
    console.log("nameArray =", nameArray);
    //sorts the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySlice =", nameArraySlice);
    //join array into a string again
    var sortedname = NameArraySort.join('');
    console.log("shortname =", shortname);
    return shortname;
  }

//Output
document.writeln("There we go, your name is finally short enough: ",
    removenametype1(), "</br>");
