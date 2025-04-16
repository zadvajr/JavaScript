//Js script to check grades
let userInput = prompt("Enter a score (0-100)");

if(userInput === null || userInput.trim() === "") {
    alert("No Inputs Provided! Please run again and enter a grade.");
} else if(isNaN(userInput)) {
    alert("Input is not a Number! Please enter score in number 0-100");
} else if(userInput < 0 || userInput > 100) {
    alert("Invalid Grade!");
} else {
    let grade = Number(userInput);
    if(grade >= 70) {
        alert("Grade: Excellent!");
    } else if(grade >= 50) {
        alert("Grade: Good");
    } else {
        alert("Grade: Needs Improvement");
    }
}