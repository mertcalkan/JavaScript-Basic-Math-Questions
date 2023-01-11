//145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

//Find the sum of all numbers which are equal to the sum of the factorial of their digits.

//Note: As 1! = 1 and 2! = 2 are not sums they are not included.

var sumOfNumberDigitFactorials = 0;

function factorial(n, prevFactValues = []) {
    let result;
    if (n < 0) {
        result = null;
    } else if (n == 0 || n == 1) {
        result = 1;
    } else {
        result = n * factorial(n - 1);
    }
    prevFactValues[n] = result;
    return result;
}
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));

function curiousSums() {
    var sumOfCuriousNumbers = 0;
    for (let i = 10; i < 9999999; i++) {
        if (factorialSumChecker(i)) {
            sumOfCuriousNumbers += i;
        }
    }
    return sumOfCuriousNumbers;
}

function factorialSumChecker(number) {
    for (let j = 0; j < number.toString().length; j++) {
        sumOfNumberDigitFactorials += factorial(Number(number.toString()[j]));
    }
    if (sumOfNumberDigitFactorials == number) {
        bool = true;
    } else {
        bool = false;
    }
    sumOfNumberDigitFactorials = 0;
    return bool;
}

console.log(curiousSums());