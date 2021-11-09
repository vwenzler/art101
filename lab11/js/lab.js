/*
 * Author: Vincent Wenzler
 *Created: 8 November 2021
 *License: Public Domain
 */

 //find challenges and add mybutton
 $("#challenge").append("<button id='button1'>This is a button");

 $("#problems").append("<button id='button2'>this is another button");

 $("#results").append("<button id='button3'>one more button");

 //using jquery add click event to each button

  $("#button1").click(function(){
    $(this).parent().toggleClass("special");
  })

  $("#button2").click(function(){
    $(this).parent().toggleClass("special");
  })

  $("#button3").click(function(){
    $(this).parent().toggleClass("special");
  })
