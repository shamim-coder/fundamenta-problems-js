let str = "Hello, My name is shamim reza";

function reverseString(str) {
    let reverse = "";
    for (const letter of str) {
        reverse = letter + reverse;
    }
    return reverse;
}
let result = reverseString(str);
console.log(result);

// Reverse a String With Built-In Functions
/* String.prototype.split()
 * Array.prototype.reverse()
 * Array.prototype.join()    */

function reverseInArray(str) {
    return str.split("").reverse().join("");

    // let arrStr = str.split("");
    // let reverseArr = arrStr.reverse();
    // return reverseArr.join("");
}
