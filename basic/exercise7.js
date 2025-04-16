//JS script for guess the number game
let secretNumber = Math.floor(Math.random() * 5) + 1;

let userNumber = prompt("Guess a number between 1 and 5");

if(userNumber === null || userNumber.trim() === "") {
    alert("No Input Provided!");
} else if(isNaN(userNumber)) {
    alert(`"${userNumber}" is not a number! Please try again.`);
} else {
    let guessNumber = Number(userNumber);
    if(guessNumber !== secretNumber) {
        alert(`Wrong guess. The number was ${secretNumber}`);
    } else {
        alert("You guessed right!");
    }
}