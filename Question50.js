//The prime 41, can be written as the sum of six consecutive primes:

//41 = 2 + 3 + 5 + 7 + 11 + 13
//This is the longest sum of consecutive primes that adds to a prime below one-hundred.

//The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

//Which prime, below one-million, can be written as the sum of the most consecutive primes?

function isPrime(num) {
  var isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
  return isPrime;
}

function findSumOfMostConsecutivePrime() {
  var result = 0;
  var summation = 0;
  for (var i = 2; i < 100000; i++) {
    if (isPrime(i) && result + i < 1000000) {
      {
        result += i;
      }
    }
  }
  for (var c = 2; c < 100000; c++) {
    if (isPrime(c)) {
      summation += c;
    }
    if (isPrime(result - summation)) {
      result = result - summation;
      break;
    } else {
      continue;
    }
  }

  return result;
}

console.log(findSumOfMostConsecutivePrime());

