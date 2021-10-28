/*
 * Author: Vincent Wenzler
 *Created: 20 October
 *License: Public Domain
 */

 function squareIt(x) {
   return(x * x);
 }

 //test function
 console.log("What is the Square of 4?", squareIt(4));
 console.log("What is the Square of 6?", squareIt(6));

 array = [31, 7, 89, 17, 101, 23];
 console.log("My array of random numbers", array);

 var result = array.map(squareIt);
 //Should return [961, 49, 7921, 289, 10201, 529]
 console.log("Test of the squares of the array:", result);

 var result = array.map(function(x){
   return (x/29);
 })
 //should return [1.0689655172413792, 0.2413793103448276, 3.0689655172413794, 0.5862068965517241, 3.4827586206896552, 0.7931034482758621]
 console.log("The array divided by 29:", result);
