function scriptTest()
{
    alert("Hey my script is running!");
}
function hello() {
    let name = document.getElementById("name").value;
    let emotion = document.getElementById("emotion").value;
    document.getElementById("hello").innerHTML = ("<p>The Majestic Tiger welecomes you, " + name + "! It seems you are feeling " + emotion + "!")
}
function joke() {
    document.getElementById("joke").innerHTML = ("A pork chop")
}
function joke2() {
    document.getElementById("joke2").innerHTML = ("It was two tired")
}
function joke3() {
    document.getElementById("joke3").innerHTML = ("He got a hole in one")
}
function joke4() {
    document.getElementById("joke4").innerHTML = ("He was stuck in a vicious cycle.")
}
function fact() {
    document.getElementById("fact").innerHTML = ("A group of Tigers are called an ambush or streak.")
}
function add() 
{
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = (number1+number2);
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function subtract() 
{
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1-number2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function multiply() 
{
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1*number2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function divide() 
{
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1/number2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}