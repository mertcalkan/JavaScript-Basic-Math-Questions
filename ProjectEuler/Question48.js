//The series, 1¹  + 2²  + 3³+ ... + 10¹⁰ = 10405071317.

//Find the last ten digits of the series, 1¹  + 2²  + 3³ + ... + 1000¹⁰⁰⁰.

var sum = 0n;
var limit = BigInt(1000)

 for(let x = 1n; x < 1000n ; x++){
    sum = sum + BigInt(x**x)
 }
console.log(sum)

var stringResult = sum.toString()
var lastTenDigits = stringResult.substring(stringResult.length - 10)
console.log(lastTenDigits)




