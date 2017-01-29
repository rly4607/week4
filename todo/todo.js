$(function() {

  $(".task").on("click", function(event) {

    event.preventDefault()
    console.log("this function ran")
    var elementThatWasClicked = $(this)
    console.log(elementThatWasClicked)
    //  elementThatWasClicked.remove()
    elementThatWasClicked.parent().parent().fadeOut()
    // remove the element
  })

})
