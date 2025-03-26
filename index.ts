// Day 7 - Exercise 5

const text: HTMLElement = document.getElementById("texto");

function layEggs(quantity: number, color: string): void {
    const textValue: string = `You just laid ${quantity} ${color} eggs. Good job!`;
    console.log(textValue);
    text.innerHTML = textValue;
}

layEggs(10, 'blue');
