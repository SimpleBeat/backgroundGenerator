var cssTextNode = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var pageBody = document.querySelector("body");
var randomGradient = document.querySelector(".randomGradient");
var swap = document.querySelector(".swap");

var stringOfColorDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

function cssText() {
    return "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function updateCSSCodeText() {
    cssTextNode.textContent = "background: "+cssText()+";";
}

function changeGradientColor() {
    pageBody.style.background = cssText();
    updateCSSCodeText();
}

function randomDigit() {
    return Math.floor(Math.random() * stringOfColorDigits.length);
}

function generateGradient() {
    var c1 = "#";
    var c2 = "#";

    for (var i=0; i<6; i++) {
        c1 = c1 + stringOfColorDigits[randomDigit()];
        c2 = c2 + stringOfColorDigits[randomDigit()];
    }

    color1.value = c1;
    color2.value = c2;

    changeGradientColor();
}

function swapColors() {
    var temp = color1.value;
    color1.value = color2.value;
    color2.value = temp;
    changeGradientColor();
}

color1.addEventListener("input", changeGradientColor);
color2.addEventListener("input", changeGradientColor);
randomGradient.addEventListener("click", generateGradient);
swap.addEventListener("click", swapColors);

changeGradientColor();