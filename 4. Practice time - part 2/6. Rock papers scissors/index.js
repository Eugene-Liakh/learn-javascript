let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function goWild() {
  num = Math.floor(Math.random() * 3);
  return hands[num];
}

goWild(hands);
