//Primes Below a Given Number
//Create a function that will find all primes below a given number. Return the result as an array.

//Examples
//primesBelowNum(5) ➞ [2, 3, 5]

//primesBelowNum(10) ➞ [2, 3, 5, 7]

//primesBelowNum(20) ➞ [2, 3, 5, 7, 11, 13, 17, 19]

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

function primesBelowNum(num){
    var arr = []
    for(let i = 0; i <=num ; i++){
        if(isPrime(i)){
            arr.push[i]
        }
    }
    return arr
}