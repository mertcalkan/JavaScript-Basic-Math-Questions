//Combinatoric Selections
//There are exactly ten ways of selecting three from five, 12345:
//123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
//In combinatorics, we use the notation C(5,3) = 10.
// In general C(n,r) =  n! / ((n-r)! * r !) , where r <= n , n! = n * (n-1) * (n-2) * ... 3 * 2 * 1 , and 0! = 1.
//It is not until , that a value exceeds one-million: C(23,10) = 1144066
//How many, not necessarily distinct, values of C(n,r) for 1 <= n <= 100 , are greater than one-million?


function combination(n,r){
    return factorial(n) / (factorial(n-r) * factorial(r))

}
function factorial(n, prevFactValues = []) {
    let result;
    if (n < 0) {
        result = null;
    } else if (n == 0 || n == 1) {
        result = 1;
    } else {
        result = n * factorial(n - 1);
    }
    prevFactValues[n] = result;
    return result;
}
 
function greaterThanOneMillionCombinations(){
    var array = []
    var counter = 0;
    for(let i = 1 ; i <= 100 ; i++){
        for(let j = 0 ; j <= i ; j++){
            if(combination(i,j) > 1000000){
              array.push(combination(i,j))
            }
        }
    }
    return array.length;
}
    

console.log(combination(5,2))

console.log(greaterThanOneMillionCombinations())