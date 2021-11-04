/*
 * Author: Vincent Wenzler
 *Created: 20 October
 *License: Public Domain
 *Based on code from Wes Modes <wmodes@csumb.edu>
 */


// fix name, sorts the name entered in the window.
  function fixname() {
    // prompts for name
    var normalname = window.prompt("Your name seems to have a bit too much meaning. Let me fix that.") ;
    console.log("normalname =", normalname) ;

    // split string into an Array
    var nameArray = normalname.split('') ;
    console.log("nameArray =", nameArray) ;

    // sorts the array
    var nameArraySort = nameArray.sort() ;
    console.log("nameArraySort =", nameArraySort) ;

    // join array into a string again
    var sortedName = nameArraySort.join('') ;
    console.log("sortedName =", sortedName) ;
    // these could be wrtitten on the same line
    return sortedName;
  }

//Output
document.writeln("There we go, your name finally doesn't make sense: ",
    fixname(), "</br>") ;
