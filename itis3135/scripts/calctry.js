function add() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = (number1 + number2);
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function subtract() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1 - number2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function multiply() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1 * number2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function divide() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1 / number2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}