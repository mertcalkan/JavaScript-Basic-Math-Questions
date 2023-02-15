// Given a natural number n, we want to know in how many ways we may express these numbers as product of other numbers.

// For example the number

//  18 = 2 x 9 = 3 x 6 = 2 x 3 x 3 # (we do not consider the product 18 x 1), (3 ways)
// See this example a bit more complicated,

// 60 = 2 x 30 = 3 x 20 =  4 x 15 = 5 x 12 = 6 x 10 = 2 x 2 x 15 = 2 x 3 x 10 = 2 x 5 x 6 =  3 x 4 x 5 = 2 x 2 x 3 x 5 (10 ways)
// 24
// 2 12 2 3
// 2 2 6
// 2 3 4
// 2 24
// 2 2 12
// 2 2 2 6
// 2 2 2 2 3
// sonuncu asalsa.
// veya bölümü kendinden kucuk oluyosa.
// tek
// 2 12
// 3 8
// 4 6
// 2 2 6
// 2 3 4
// 2 2 2 3

function getMinimalFactorArr(number) {
  var result = [];
  var cloneNum = number;
  for (let i = 2; i <= number; i++) {
    if (cloneNum % i == 0) {
      while (number % i == 0) {
        number /= i;
        result.push(i);
      }
    }
  }
  return result;
}

function isPrime(num) {
  var isPrime = true;
  for (let j = 2; j < num; j++) {
    if (num % j == 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
  return isPrime;
}

var sum = 0;
var g = 2;
var arr = [];

function calcFactors(number) {
  for (let b = g; b <= number / b; b++) {
    if (number % b == 0) {
      arr.push([b, number / b]);
    }
  }
  sum += arr.length;
  arr.forEach(function (el) {
    for (let l = el.at(-2); l <= el.at(-1) / el.at(-2); l++) {
      if (el.at(-1) % l == 0) {
        arr.push(concatArr(el, l));
      }
    }
  });
  return arr;
}

console.log(calcFactors(60));

function concatArr(arr, div) {
  arr.at(-2) == div;
  arr.push(arr.at(-1) / div);
  arr.at(-2) == div
  return arr;
}
