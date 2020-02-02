

const cards = ["queen", "queen", "king", "king"].length;

const cardsInPlay = [];

var cardOne = ["queen"];

cardsInPlay.push('cardOne');

console.log("User flipped queen")

var cardTwo = ["king"];

cardsInPlay.push('cardTwo');

console.log("User flipped king");

if (cardsInPlay === 2) {
  alert("You found a match!");
}
// Could not get the else function to work.
if (cardsInPlay !== 2) {
  alert("Sorry try again!");
}
