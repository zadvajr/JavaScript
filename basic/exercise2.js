//Basic calculator to perform basic arithmetic operations.
num1 = Number(prompt("Enter first number"));
op = prompt("Enter operator");
num2 = Number(prompt("Enter second number"));

let result = 0;
if ((num1 === null) || (num2 === null) || (op === null)) {
    alert("NO INPUTS! Enter Valid Inputs")
} else if(isNaN(num1) || isNaN(num2)) {
    alert("Enter only numbers for both first and second number inputs!")
} else {
    if (op == '+') {
        result = num1 + num2;
        alert("Result: " + result);
    } else if (op == '-') {
        result = num1 - num2;
        alert("Result: " + result);
    } else if (op == '*') {
        result = num1 * num2;
        alert("Result: " + result);
    } else if (op == '/') {
        result = num1 / num2;
        alert("Result: " + result.toFixed(2));
    } else {
        alert("Invalid operator");
    }
}