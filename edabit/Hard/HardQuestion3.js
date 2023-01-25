//Legendre's Formula
//Legendre's formula finds the exponent of the largest power of some prime p that divides (is a factor of) the factorial of some number n.

//Legendre's formula example (p = 2 and n = 27):

//Legendre's Formula

//So 2^23 is the largest power of 2 that divides 27!.

//The formula returns the sum of many fractions (rounded down) with n as the numerator and a steadily increasing power of p as the denominator, stopping when it exceeds the numerator.

//Examples
//legendre(5, 100) ➞ 24

//legendre(2, 128) ➞ 127

//legendre(3, 50) ➞ 22

function legendre(a, b) {
  var power = 1;
  var result = 0;
  tempReference = Math.floor(b / Math.pow(a, power))
  while (tempReference > 0) {
    power ++;
    result += tempReference
    tempReference = Math.floor(b / Math.pow(a, power))
  }
  return result
}

console.log(legendre(3,50))
