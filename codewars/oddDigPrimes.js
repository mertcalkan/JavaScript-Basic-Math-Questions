//Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

//Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below:

//[number pure odd digit primes below n, largest pure odd digit prime smaller than n, smallest pure odd digit prime higher than n]

//Let's see some cases:

//only_oddDigPrimes(20) ----> [7, 19, 31]
///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
//19, because is the nearest prime of this type to 20
//31, is the first pure odd digit that we encounter after 20///

//only_oddDigPrimes(40) ----> [9, 37, 53]
//In the case that n, the given value, is a pure odd prime, should be counted with the found primes and search for the immediately below and the immediately after.

function onlyOddDigPrimes(number) {
  let secondParamArr = [];
  let arr = [];
  let firstCounter = 0;
  for (var i = 2; i < number; i++) {
    if (isPrime(i) && isAllDigitsOdd(i)) {
      firstCounter++;
      secondParamArr.push(i);
    }
  }
  while (i > 0) {
    i++;
    if (isPrime(i) && isAllDigitsOdd(i)) {
      break;
    }
  }
  arr.push(firstCounter);
  arr.push(secondParamArr[secondParamArr.length - 1]);
  arr.push(i);
  return arr;
}

function isAllDigitsOdd(n) {
  for (let j = 0; j < n.toString().length; j++) {
    if (Number(n.toString()[j]) % 2 == 1) {
      bool = true;
    } else {
      bool = false;
      break;
    }
  }
  return bool;
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
