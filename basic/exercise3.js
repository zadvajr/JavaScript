//Js Script to check voting eligibility in Nigeria
let userAge = prompt("Enter your age");

if(userAge === null || userAge.trim() === "") {
    alert("No User Age Entered! Try Again.");
} else if(isNaN(userAge)) {
    alert("Age must be a number!");
} else if(userAge <= 0) {
    alert("Invalid age! Age cannot be zero or negative.");
} else {
    if(userAge >= 18) {
        alert("You are Eligible to Vote");
    } else {
        alert("Not Eligible to Vote!");
    }
}