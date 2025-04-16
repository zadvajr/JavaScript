//JS Script to check if a number is odd or even
let number_input = prompt("Enter a number");

if(number_input === null || number_input.trim() === "") {
    alert("No Inputs Provided!");
} else if(isNaN(number_input)) {
    alert("Input Not a Number!")
} else {
    let number = Number(number_input)
    if (number % 2 == 0) {
        alert("The number is even");
    } else if (number % 2 != 0) {
        alert("The number is odd");
    } else {
        alert("Invalid input!")
    }
}