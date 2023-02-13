var counter = 0;
var counterSec = 0;
// baseParam of make array of fractions of loop.
let arrayInMainFunc = [];
let array = []; //baseArray of make array of fractions of loop.
function prodIntPart(number) {
  var cloneNumber = number;
  for (let k = 2; k <= number / k; k++) {
    if (cloneNumber % k == 0) {
      counter++;
      arrayInMainFunc.push(k)
    }
  }
  
  // for (let j = 2; j <= number / j; j++) {
  //   if (cloneNumber == 1) {
  //     prodIntPart(number / j);
  //   }
  // }
  return [makeCalc(number , 2),  getMinimalFactorArr(number)];
}

function getMinimalFactorArr(number) {
  var result = [];
  var cloneNum = number;
  for (let i = 2; i <= number; i++) {
    if (cloneNum % i == 0) {
      while (number % i == 0) {
        number /= i;
        result.push(i);
      }
    }
  }
  return result  
}

function makeCalc(number, v) {
  var clone = number;
  for (v; v <= clone / v; v++) {
    if (number % v == 0) {
      while (clone % v == 0) {
        clone = clone / v;
        makeCalc(clone , v)
      }
      counterSec++
      
      
    }
  }
  
  
  
  return counterSec;
}
console.log(prodIntPart(18));
console.log(prodIntPart(24));
console.log(prodIntPart(60));
console.log(prodIntPart(54));
