// Write a function that will simplify a compound fraction.As input, it should accept three arguments as integers: integer, numerator, and denominator.It should
// return an array with three items, all integers: [integer, numerator, denominator].If there should be no integer, or no fraction resulting from simplification, just
// return zeros in their place.

// There is a convenience
// function you can use called toString(integer, numerator, denominator).It also takes three integer values, and returns a string of the compound fraction
// for logging, etc.


function simplify(integer, numerator, denominator){
    let floorPart = Math.floor(integer + numerator / denominator)
    numerator = numerator - Math.floor(numerator / denominator) * denominator;
    for(let i = 2 ; i < denominator; i++){
        if(numerator % i == 0 && numerator != 0 && denominator % i == 0){
            while(numerator % i == 0 && denominator % i == 0){
                numerator = numerator / i
                denominator = denominator / i
            }
           
        }
    }
    return [floorPart , numerator , denominator ]
}
console.log(simplify(7,0,6))
console.log(simplify(4,3,2))
console.log(simplify(2,2,2))
console.log(simplify(0,0,5))
console.log(simplify(4,12,2))
console.log(simplify(0,15,12))