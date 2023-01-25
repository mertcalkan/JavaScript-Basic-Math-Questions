//Is the Input Factorial of an Integer?
//Create a function to check if a given integer is a factorial of integer or not. The return value should be a boolean.

//Examples
//isFactorial(2) ➞ true
// 2 = 2 * 1 = 2!

//isFactorial(27) ➞ false

//isFactorial(24) ➞ true
// 24 = 4 * 3 * 2 * 1 = 4!

function isFactorial(number){
    let reference = 1;
    let result = 1;
    while(result < number){
        reference++
        result = result * reference
    }
    if(result == number){
        return true
    }
    else{
        return false
    }
}