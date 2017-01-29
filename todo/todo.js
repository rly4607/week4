$(function() {

  $(".task").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    console.log(elementThatWasClicked)
  //  elementThatWasClicked.remove()
    elementThatWasClicked.parent().remove()
    // remove the element
  })

})
