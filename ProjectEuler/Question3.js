// largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
const factors = [];
  let divisor = 2;


function findPrimeFactor(number) {

  while (number >= 2) {
    if (number % divisor == 0) {
      factors.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
 
}




console.log(findPrimeFactor(600851475143)[factors.length-1]);
