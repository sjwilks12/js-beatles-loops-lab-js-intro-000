function theBeatlesPlay(musicians, instruments) {
  var newarray = []
  for ( var i = 0; i < musicians.length; i++) {
    newarray.push(musicians[i] + " plays " + instruments[i])
  }
  return newarray
}

function johnLennonFacts(facts) {
  var i = 0
  var newarray = []
  while (i < facts.length) {
    newarray.push(facts[i] + "!!!")
    i++
  }
  return newarray
}

function iLoveTheBeatles(number) {
  var i = 0;
  var newarray = [];
    if (number < 15) {
      var i = 0;
      function incrementVariable() {
        i++
        return i
      }
      do {
        newarray.push("I love the Beatles!");
      } while (incrementVariable() <= number);
    }
    else {
      newarray.push("I love the Beatles!");
    }
  return newarray
}
