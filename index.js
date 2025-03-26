// Day 7 - Exercise 5
var text = document.getElementById("texto");
function layEggs(quantity, color) {
    var textValue = "You just laid ".concat(quantity, " ").concat(color, " eggs. Good job!");
    console.log(textValue);
    text.innerHTML = textValue;
}
layEggs(10, 'blue');
