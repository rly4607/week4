// This code runs when the page loads
$(function() {

  $("#do-something").on("click", function(event) {
    // Do something
    event.preventDefault()
    $("#unicorn").fadeIn(2000,after())
  });

  var after = function() {
    $("#unicorn").fadeOut(2000)
  }

})
