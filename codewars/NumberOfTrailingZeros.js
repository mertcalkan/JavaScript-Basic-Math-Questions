//Write a program that will calculate the number of trailing zeros in a factorial of a given number.

//N! = 1 * 2 * 3 *  ... * N

//Be careful 1000! has 2568 digits...

// zeros(0) = 0



function zeros(n) {
 
  if(n == 0){
    return 0
  }
  
    var result = 0;
    while (Math.floor(n / 5) > 1) {
      n = Math.floor(n / 5);
      result += n;
    }
    if(Math.floor(n/5) == 1){
        result = result + 1;   
    }
    
    return result;
  
}

console.log(zeros(34))
console.log(zeros(20))
