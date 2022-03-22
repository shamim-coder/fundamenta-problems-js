/* 
[0,  1,  1,  2,  3,  5, 8, 13, 21, 34, 55, 89, 144]

1st = 0
2nd = 1
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
7th = 6th + 5th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/

function fibonacci(numberOfSeries) {
    let fibo = [0, 1];

    if (typeof numberOfSeries != "number") {
        return "input only numbers";
    }
    if (numberOfSeries < 2) {
        return "input number getter then 2";
    }

    for (i = 2; i < numberOfSeries; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
}

let result = fibonacci(9);
console.log(result);
