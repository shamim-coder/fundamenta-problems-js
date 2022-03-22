let numbers = [36, 46, 11, 73, 22, 44, 36, 73, 44, 96, 72, 96, 36, 41, 46];
function duplicateRemove(numbers) {
    let uniqNumbers = [];
    for (const element of numbers) {
        if (uniqNumbers.indexOf(element) === -1) {
            uniqNumbers.push(element);
        }
    }
    return uniqNumbers;
}

let uniqNumbers = duplicateRemove(numbers);
console.log(uniqNumbers);
