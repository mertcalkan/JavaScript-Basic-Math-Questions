//Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
//If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

//For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

//Evaluate the sum of all the amicable numbers under 10000.


function properDivisors(number){
    var sumProperDivisors = 0;
   for(let i = 1; i<number; i++){
    if(number % i == 0 ){
        sumProperDivisors += i;
    }
   } 
   return sumProperDivisors;
}
console.log(properDivisors(220))
console.log(properDivisors(284))

function isAmicable(number){
    
    if(number == properDivisors(properDivisors(number)) && number != properDivisors(number)){
        return true;
    }
    else{
        return false;
    }
}

console.log(isAmicable(220))

 function sumOfAllAmicables(number){
    var sumOfAllAmicable = 0;
     for(let j = 1; j < number; j++){

         if(isAmicable(j)){
           sumOfAllAmicable += j  
         }
    }
    return sumOfAllAmicable
 }

 console.log(sumOfAllAmicables(10000))