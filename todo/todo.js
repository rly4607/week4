$(function() {

  console.clear()

  window.$("#task1").attr("font-size",40)

  $(".task").on("click", function(event) {

    event.preventDefault()
    var elementThatWasClicked = $(this)
    window.newvar = elementThatWasClicked
//    console.log(elementThatWasClicked)
//    console.log(newvar)
    var itemNum = elementThatWasClicked[0].id.split("task")[1]

    console.log("Item # " + itemNum + " was clicked")

    $("#status" + itemNum).html("Done!")
    $("#due" + itemNum).html("<a>Remove from list?</a>")
    $(this).css("text-decoration","line-through")


  //  elementThatWasClicked.parent().parent().fadeOut()
    // remove the element

  /*  var color = $( this ).css( "font-size" );
    console.log( "That div is " + color );
    window.color = color
    var newcolor = (parseInt(color.split("px")[0])+2)
    console.log("New font size is " + newcolor)
    $(this).css("font-size",newcolor + "px") */
  })

  $(".Remove").on("click", function(event) {
    console.log("Remove element was clicked")

    var elementThatWasClicked = $(this)
    window.newvar = elementThatWasClicked
    if (newvar[0].innerText == "Remove from list?") {
      elementThatWasClicked.parent().parent().fadeOut()
      var itemNum = parseInt(elementThatWasClicked[0].id.split("due")[1])

      //console.log("Item # " + itemNum + " was clicked")
      var nextItem = itemNum + 1
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
