// get a random integer between 1 and 6 - getRandomInt(1, 6)
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {

  event.preventDefault()
  $("#rollbtn").on("click", function(event) {
    // Do something
    event.preventDefault()
    var newDie1 = getRandomInt(1,6)
    var newDie2 = getRandomInt(1,6)
    console.log(newDie1 + " + " + newDie2 + " = " + (newDie1+newDie2))

    $("#d1").attr("src", "http://golearntocode.com/images/dice/" + newDie1 + ".png")
    $("#d2").attr("src", "http://golearntocode.com/images/dice/" + newDie2 + ".png")

    if ((newDie1 + newDie2)>8) {
      $("#unicorn").fadeIn()
    }
    else {
      $("#unicorn").fadeOut()
    }

  //  $("#unicorn").fadeIn(2000,after())
  });
  // make magic happen
  // some jQuery functions you'll need:
  // - click
  // - attr
})
