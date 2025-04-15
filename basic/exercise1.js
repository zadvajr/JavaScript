//JS Script to check if a number is odd or even
let number_input = Number(prompt("Enter a number"));

if (number_input % 2 == 0) {
    alert("The number is even");
} else if (number_input % 2 != 0) {
    alert("The number is odd");
} else {
    alert("Invalid input!")
}