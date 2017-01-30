$(function() {

  console.clear()

  window.$("#task1").attr("font-size",40)

  $(".task").on("click", function(event) {

    event.preventDefault()
    var elementThatWasClicked = $(this)
    window.newvar = elementThatWasClicked

    var itemNum = elementThatWasClicked[0].id.split("task")[1]

    console.log("Item # " + itemNum + " was clicked")

    $("#status" + itemNum).html("Done!")
    $("#due" + itemNum).html("<a>Remove from list?</a>")
    // Put a strikethrough the task text
    $(this).css("text-decoration","line-through")

  })

  $(".Remove").on("click", function(event) {
    var elementThatWasClicked = $(this)
    window.newvar = elementThatWasClicked

    // First check to see if the task has already been completed and the text
    // has been changed.  It's changed if it equals "Remove from list?"
    // If not - do nuthin'

    if (newvar[0].innerText == "Remove from list?") {

      // Remove row from the table
      elementThatWasClicked.parent().parent().fadeOut()

      // Go through items after this one and decrement their Task #s
      var itemNum = parseInt(elementThatWasClicked[0].id.split("due")[1])
      var nextItem = 0
      var nextItemVal = 0

      for(i=itemNum; i<7; i++) {
        nextItemVal = parseInt($("#num" + (i+1))[0].innerText)
        console.log("Next item is num" + (i+1) + " and its value is " + nextItemVal)
        nextItemVal = nextItemVal-1
        $("#num" + (i+1)).html(nextItemVal)
      }

    }
    else {
      console.log("Not time to remove yet!")
    }
  })
})
