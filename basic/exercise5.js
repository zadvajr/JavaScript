//Js script to generate multiplication table
let userInput = prompt("Enter a number");

if(userInput === null || userInput.trim() === "") {
    alert("No Inputs Entered! Please run and enter a number.");
} else if(isNaN(userInput)) {
    alert("Input not a number! Please enter a number");
} else {
    let number = Number(userInput);
    for(let i = 1; i <= 12; i++) {
        console.log(`${number} X ${i} = ${number * i}`);
    }
}