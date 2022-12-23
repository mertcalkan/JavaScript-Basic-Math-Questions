//Sum square difference
//The sum of the squares of the first ten natural numbers is,
//1² + 2²  + 3²  + 4² + 5² + 6²  + 7²  + 8² + 9²  + 10² = 385
//The square of the sum of the first ten natural numbers is,
//(1 +  2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)² = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
//3025 - 385 = 2640
//Find the difference between the sum of the squares of the first one hundred natural 
// numbers and the square of the sum.

let sumOfSquare = 0;
let squareOfSum = 0;
let sumOfRange = 0 ;

for(let i = 1; i<100; i++){
    sumOfSquare += i*i
    sumOfRange += i 
    squareOfSum = sumOfRange * sumOfRange
}
console.log(sumOfRange)
console.log(squareOfSum - sumOfSquare)