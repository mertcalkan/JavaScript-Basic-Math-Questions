//summation of primes
//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.
var sumOfPrimes = 0;
var j = 2;

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
function calculateSumOfPrimes(num){
  while(j< num){
    if(isPrime(j) && (num % j ==0)){
        sumOfPrimes += j
        }
    j++
    return sumOfPrimes    
  }
    
}

console.log(calculateSumOfPrimes(10))

