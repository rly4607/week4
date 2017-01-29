// DO NOT CHANGE THE CODE BETWEEN HERE AND LINE 30

// function to shuffle (randomize the order of) an array
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns something representing a deck of cards... try it in the console, you'll see
// e.g. window.getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END DO NOT CHANGE CODE

$(function() {
  $("#dealbtn").on("click", function(event) {
    console.clear()
    event.preventDefault()

    window.newShuffle = getDeck().shuffle()

    var cards = []

    for (i=0; i<5; i++) {
      cards[i] = newShuffle[i].split("_of_")
      console.log(cards[i][0] + " " + cards[i][1])
      $("#c" + (i+1)).attr("src", "http://golearntocode.com/images/cards/" + newShuffle[i] +".png")
    }

    window.cards = cards

    // Count up number of cards & suits

    var counter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    var suits = 0
    var Result = "Nuttin!"

    for (j=2; j<=14; j++) {
      for (k=0; k<=4; k++) {
        if (j<=10) {
          if (cards[k][0] == j) {
            counter[j]++
            Result = j + " High... :-("
            }
        }
        else {
          switch (j) {
            case 11:
              if(cards[k][0] == "jack") {
                counter[j]++
                Result = "Jack High!"
              }
              break;
            case 12:
              if(cards[k][0] == "queen") {
                counter[j]++
                Result = "Queen High!"
              }
              break;
            case 13:
              if(cards[k][0] == "king") {
                counter[j]++
                Result = "King High!"
              }
              break;
            case 14:
              if(cards[k][0] == "ace") {
                counter[j]++
                counter[1]++
                Result = "Ace High!"
              }
              break;
          }
        }
      }
    }

    console.log(counter)

    // check to see if cards 2,3,4,5 suit matches card 1
    // suit of card 1 doesn't really matter since all suits
    // have to match for a flush

    for (m=1; m<=4; m++) {
      if(cards[m][1]==cards[0][1]) {
        suits++
      }
    }
    console.log("suit counter is " + suits)

    var twos = 0
    var threes = 0
    var fours = 0
    var straight = 0

    // Check for two of a kind, three of a kind, four of a kind, two pair,
    // full house, and a straight

    for (l=0; l<counter.length; l++) {
      if(counter[l]==1 && l<(counter.length-1)) {
        if(counter[l+1]==1) {
          straight++
          console.log("counter position is " + l + " straight counter = " + straight)
        }
      }
      else if(straight>0) {
        straight--
      }

      if(counter[l]==2 && l>1)
      {
        twos++
      }
      if(counter[l]==3 && l>1)
      {
        threes++
      }
      if(counter[l]==4 && l>1)
      {
        fours++
      }
    }

//    console.log("twos = " + twos + " threes = " + threes + " fours = " + fours)


    if(twos==1) {
      Result = "Two of a Kind!"
    }
    if(twos==2) {
      Result = "Two Pair!"
    }
    if(threes==1) {
      Result = "Three of a Kind!"
    }
    if(twos==1 && threes==1) {
      Result = "Full House!"
    }
    if(fours)
    {
      Result = "Four of a Kind!"
    }
    if(straight==4 || suits==4)
    {
      if(straight==4 && suits==4) {
        Result = "Straight Flush!"
      }
      else if(straight==4){
        Result = "Straight!"
      }
      else {
        Result = "Flush!"
      }
    }

    console.log(Result)

    $("#hand").html("<h1>Result: " + Result + "</h1>")

  });
});
