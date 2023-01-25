//Definition (Primorial Of a Number)
//Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.
//1- numPrimorial (3) ==> return (30)
//2- numPrimorial (5) ==> return (2310)

function isPrime(num){
    var isPrime = true
    for(let j = 2 ; j < num; j++){
        if(num % j == 0){
            isPrime = false;
            break
        }
        else{
        isPrime = true;            
        }
    }
    return isPrime
}

function numPrimorial(number){
    let result = 1;
    let counter = 0;
    let primeParam = 0;
    while (counter <= number){
        primeParam++
        if(isPrime(primeParam)){
            counter++
            result *= primeParam
        }
        
    }
    return result
}

console.log(numPrimorial(3))