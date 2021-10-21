/*
 * Author: Vincent Wenzler
 *Created: 20 October
 *License: Public Domain
 *Based on code from Wes Modes <wmodes@csumb.edu>
 */

// Define Variables
myTransport = ["Volvo V70", "bus", "BART", "rides from friends", "walking"];

myMainRide = {
      make: "Volvo",
      model: "V70",
      color: "Silver",
      year: 2000,
      age: function() {
          return 2021 - year;
      }
}

// output
document.writeln("Kinds of Transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
