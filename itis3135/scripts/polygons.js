document.onload = polygonNamer();

function validateEntry(sides) {
    if (typeof sides == 'number') {
        if (sides >= -10 && sides <= 10) {
            return true;
        } else {
            return false
        }
    }
}

function getShape(sides) {
    sides = Math.round(Math.abs(sides));
    switch (sides) {
        case 0:
            return "There is no such polygon with this many sides.";
            break;
        case 1:
            return "monogon";
            break;
        case 2:
            return "bigon";
            break;
        case 3:
            return "trigon";
            break;
        case 4:
            return "tetragon";
            break;
        case 5:
            return "pentagon";
            break;
        case 6:
            return "hexagon";
            break;
        case 7:
            return "heptagon";
            break;
        case 8:
            return "octagon";
            break;
        case 9:
            return "enneagon";
            break;
        case 10:
            return "decagon";
            break;
    }
}
/**Function will prompt user, check sides if valid, and alert the user what shape they wanted*/
function polygonNamer() {
    var sides = prompt("Please type in a number between 1-10 to name your polygon.");
    var input = parseFloat(sides);
    var i = 0;
    /**Loops until user enters a valid number*/
    while (i == 0) {
        if (validateEntry(input) == true) {
            var shape = getShape(input);
            alert(shape);
            i = 1;
        }
        if (validateEntry(input) == false) {
            input = parseFloat(prompt("Invalid entry. Please enter a number 1-10."));
        }
    }
}