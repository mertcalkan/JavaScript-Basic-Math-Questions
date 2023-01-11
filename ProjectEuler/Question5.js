//Smallest multiple
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


function createDividerArray(num){
    var array = [];
    for(let i = 2 ; i < num ; i++){
        if(isPrime(i) && (num % i == 0)){
            while(num % i == 0){
                num = num / i 
                array.push(i)
            } 

        } 
    }
    return array
}

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
console.log(isPrime(2))
console.log(createDividerArray(32))