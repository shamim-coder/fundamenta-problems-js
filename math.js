let num = -65.7;

console.log(Math.abs(num)); // output 65.7

num = 5.28;
console.log(Math.ceil(num)); // output 6

num = 25.54;
console.log(Math.floor(num)); // output 25
console.log(Math.round(num)); // output 26

let randomNumber = Math.random() * 4;
console.log(randomNumber);

for (i = 0; i < 10; i++) {
    let randomNumber = Math.random() * 6;
    if (randomNumber >= 2) {
        console.log(Math.ceil(randomNumber));
    } else {
        console.log("down number");
    }
}

// Math.min & Math.max

let arr = [35, 66, 79, 16, 99, 10, 46];
let minNum = Math.min(...arr);
let maxNum = Math.max(...arr);
console.log(
    "Minimum Number of the Array is " +
        minNum +
        " and maximum number is " +
        maxNum
);

// Math.sqrt & Math.pow
console.log(Math.sqrt(25)); // output 5
console.log(Math.sqrt(64)); // output 8
console.log(Math.sqrt(120)); // output 10.954451150103322
console.log(Math.sqrt(-Infinity)); // NaN - Not a Number

console.log(Math.pow(4, 3)); // 4 * 4 * 4       output 64
console.log(Math.pow(12, 2)); // 12 * 12        output 144
