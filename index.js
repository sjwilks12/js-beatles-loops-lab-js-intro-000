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
<<<<<<< HEAD
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
=======
  var newarray = []
  var i = 0
  if (number <= 15) {
    do {
      newarray.push("I love the Beatles!"))
      i++
    } while (i < number.length)
  }
  else {
    newarray.push("I love the Beatles!"))
  }
>>>>>>> e92072095ec0837e13cb788d082947d7d9cae5f6
  return newarray
}
