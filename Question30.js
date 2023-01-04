//Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

//1634 = 1⁴ + 6⁴ + 3⁴ + 4⁴
//8208 = 8⁴ + 2⁴ + 0⁴ + 8⁴
//9474 = 9⁴ + 4⁴ + 7⁴ + 4⁴
//As 1 = 1⁴ is not a sum it is not included.

//The sum of these numbers is 1634 + 8208 + 9474 = 19316.

//Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
var sumOfFifthPowerSum = 0;

function findFifthPowerSum() {
    var resultSum = 0;

    for (let i = 1001; i < 292245; i++) {
        if (checkNumberPowerSum(i)) {
            resultSum += i;
        }
    }
    return resultSum;
}

console.log(findFifthPowerSum());

function checkNumberPowerSum(number) {
    var bool;
    for (let j = 0; j < number.toString().length; j++) {
        sumOfFifthPowerSum += Math.pow(Number(number.toString()[j]), 5);
    }
    if (sumOfFifthPowerSum == number) {
        bool = true;
    } else {
        bool = false;
    }
    sumOfFifthPowerSum = 0;
    return bool;
}