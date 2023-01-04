//factorial digit sum 
//n! means n × (n − 1) × ... × 3 × 2 × 1

//For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
//and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

//Find the sum of the digits in the number 100!

function factorial(n){
    var result = 1
    if(n != 0){
        for(let b = 1 ; b < n; b++){
            result *= b
        }
    }
    return result
}

function findSumOfNumber(number){
    var sumRef = 0 ;
    for(let c = 0 ; c < number.toString().length ; c++){
        sumRef += number % (Math.pow(10 , c))
    }
    return sumRef
}


function getFactorialNumbersSum(){
    var sum = 0;
    for(let a = 0; a < BigInt(factorial(100)); a++){
        sum += Number(BigInt(factorial(100)).toString()[a])   
    }
    return sum
}

console.log(getFactorialNumbersSum())
// console.log(findSumOfNumber(123))

