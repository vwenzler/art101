/*
 * Author: Vincent Wenzler, Katana Parker
 *Created: December 1, 2021
 *License: Public Domain
 *Basic structure from Wes Modes wmodes@ucsc.edu
 */

var myUrl = "https://xkcd.com/info.0.json";


//detects click and runs "runAPI" function.
$("#activate").click(runAPI);

// //prints to our output div
// function printOutput(text){
//   $("#output").html(text);
//   }

//processes JSON from an API. runs API.
function runAPI() {
  console.log("click");
  // Using the core $.ajax() method that Wes showed us in lecture
  $.ajax({
      // API endpoint
      url: myUrl,
      // GET request
      type: "GET",
      // data type
      dataType: "json",
  })

  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      var comicImg = data.img;
      var imgTag = "<img src=" + comicImg + ">";
      console.log(comicImg, imgTag);
      $("#output1").html(imgTag);

      var comicTitle = data.title
      var titleTag = comicTitle;
      $("#output2").html(titleTag);

      var comicAlt = data.alt;
      var altTag = comicAlt;
      $("#output3").html(altTag);



  })

  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);
  })

}
