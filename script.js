var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var css = document.querySelector("h3");
var button = document.querySelector("button");

setGradient();

function setGradient(a = color1.value, b = color2.value) {
    body.style.background = 
    `linear-gradient(to right, ${a}, ${b})`;
    css.textContent = body.style.background;
}

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function setRandomColor() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient(color1.value, color2.value)
}

color1.addEventListener('input', function() {
    setGradient(color1.value, color2.value);
});

color2.addEventListener('input', function() {
    setGradient(color1.value, color2.value);
});

button.addEventListener('click', setRandomColor);



