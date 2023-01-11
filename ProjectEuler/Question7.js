//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

//What is the 10 001st prime number?
let primeCounter = 0;
let x = 2;
let isPrimeBool
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
while(primeCounter <10001){
    
    if(isPrime(x)){
        primeCounter++;
    }
    if(primeCounter < 10001){
        x++
    }
   
   
    

}
console.log(x)


