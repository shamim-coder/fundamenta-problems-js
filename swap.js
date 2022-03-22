let firstNumber = 30;
let secondNumber = 50;
console.log(firstNumber, secondNumber);

// let tempNumber = 0;

// tempNumber = firstNumber;
// firstNumber = secondNumber;
// secondNumber = tempNumber;

// console.log(firstNumber, secondNumber);

// Destructuring

[firstNumber, secondNumber] = [secondNumber, firstNumber];
console.log(firstNumber, secondNumber);
