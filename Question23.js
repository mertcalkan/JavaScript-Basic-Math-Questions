//A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
// For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28,
//which means that 28 is a perfect number.

//A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

//As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

//Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

function sumOfProperDivisors(number) {
    var sumOfProper = 0;
    for (let i = 1; i < number; i++) {
      if (number % i == 0) {
        sumOfProper += i;
      }
    }
    return sumOfProper;
  }
  
  function isDeficient(number) {
    if (sumOfProperDivisors(number) > number) {
      return true;
    } else {
      return false;
    }
  }
  function pushDeficient(number) {
    var arrayDeficient = [];
    for (let j = 1; j < number; j++) {
      if (isDeficient(j)) {
        arrayDeficient.push(j);
      }
    }
    return arrayDeficient;
  }
  
  function combinationTwoItemsOfArray(array) {
    var emptyArr = [];
    for (let v = 0; v < array.length; v++) {
      for (let b = v + 1; b < array.length; b++) {
        emptyArr.push(array[v] + array[b]);
      }
    }
    return emptyArr;
  }
  
  var potentialAbundantArr = [];
  for (let r = 1; r < 28123; r++) {
    potentialAbundantArr.push(r);
  }
  function sumOfAllAbundantFormulated(number) {
    for (
      let a = 0;
      a < combinationTwoItemsOfArray(pushDeficient(number)).length;
      a++
    ) {
      potentialAbundantArr.splice(
        potentialAbundantArr.indexOf(
          combinationTwoItemsOfArray(pushDeficient(number))[a]
        ),
        1
      );
    }
    return potentialAbundantArr;
  }
  
  console.log(combinationTwoItemsOfArray(pushDeficient(28123)));
  console.log(potentialAbundantArr);
  console.log(sumOfAllAbundantFormulated(2812));
  