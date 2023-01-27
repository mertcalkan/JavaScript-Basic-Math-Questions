//Some numbers have the property to be divisible by 2 and 3. Other smaller subset of numbers have the property to be divisible by 2, 3 and 5. Another subset with less abundant numbers may be divisible by 2, 3, 5 and 7. These numbers have something in common: their prime factors are contiguous primes.

//Implement a function that finds the amount of numbers that have the first N primes as factors below a given limit.

//Let's see some cases:

//count_specMult(3, 200)  =>  6 

//The first 3 primes are: 2, 3 and 5.

//And the found numbers below 200 are: 30, 60, 90, 120, 150, 180.


function countSpecMult(n, mxval) {
    let primeMultiplication = 1
    let primeCounter = 0;
    let i = 2;
    let result = 0;
    let multiplyConstant = 1;
    while(primeCounter < n){
        if(isPrime(i)){
           primeCounter++ 
           primeMultiplication *= i;
        }
        i++;
    }
    while(multiplyConstant * primeMultiplication < mxval){
        result++;
        multiplyConstant++
    }
    return result
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