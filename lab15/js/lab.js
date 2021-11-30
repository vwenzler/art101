/*
 * Author: Vincent Wenzler, Katana Parker
 *Created: 29 November 2021
 *License: Public Domain
 *Basic structure from Wes Modes wmodes@ucsc.edu
 */

var myUrl = "https://random-word-api.herokuapp.com/word?number=10";


function callAjax() {
  console.log("click");
  // Using the core $.ajax() method that Wes showed us in lecture
  $.ajax({
      // API endpoint
      url: myUrl,
      // GET request
      type: "GET",
      // data type
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      $("#output").html(JSON.stringify(data));
      })

  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);
	})

}

$("#activate").click(callAjax);
