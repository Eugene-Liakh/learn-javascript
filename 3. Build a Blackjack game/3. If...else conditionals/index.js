let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Well, do you want to draw a new card?")
}
else if (sum === 21) {
    console.log("Wohoo! You've got a Blackjack here!")
}
else if (sum > 21) {
    console.log("You are out of the game, looser!")