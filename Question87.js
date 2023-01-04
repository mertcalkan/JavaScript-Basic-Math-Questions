//The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28. In fact, there are exactly four numbers below fifty that can be expressed in such a way:

//28 = 2² + 2³ + 2⁴ 
//33 = 3² + 2³ + 2⁴
//49 = 5² + 2³ + 2⁴
//47 = 2² + 3³ + 2⁴

//How many numbers below fifty million can be expressed as the sum of a prime square, prime cube, and prime fourth power?
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

function combinatingPrimes(){
    for(let i = 2 ; i < 10000000; i++){
        if(isPrime(i)){
            return Math.pow(i , 2 ) + Math.pow(i , 3) + Math.pow(i , 4 )
        }
    }

}

console.log(combinatingPrimes())