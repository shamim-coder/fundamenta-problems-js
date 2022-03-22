/* // Find Largest Number
function findMax() {
    let max = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max ) {
            max = arguments[i];
        }
    }
    console.log(max);
}
findMax(53, 44, 99, 77, 102); */

// Find Smallest Number
function findMin() {
    let min = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        if (min > arguments[i]) {
            min = arguments[i];
        }
    }
    console.log(min);
}
findMin(10, 53, 44, 99, 77, 102, 9);

// get smaller number using sort() function
let arr = [10, 53, 44, 99, 77, 102, 9];
let smallest = arr.sort((a, b) => a - b);

console.log(smallest[0]);

/* function max(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1, 'is a largest number');
    } else if (num2 > num3) {
        console.log(num2, 'is a largest number');
    } else console.log(num3, 'is a largest number');
}
max(50, 30, 45); */

// max and min number calculate using Math Method

/* function max(){
    return Math.max(...arguments);
}

let maxNum = max(25,66,44,33,77,99,14);
console.log(maxNum);

function min(){
    return Math.min(...arguments);
}

let minNum = min(25,66,44,33,77,99,14);
console.log(minNum); */
