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
        if((array[v] + array[b] <= 28124)  ){
            emptyArr.push(array[v] + array[b]);
          
        }
      
      }
    }
    
    return emptyArr;
  }
  
  var potentialAbundantArr = [];
  for (let r = 1; r <= 28124; r++) {
    potentialAbundantArr.push(r);
  }

  var clearedArray = [...new Set(combinationTwoItemsOfArray(pushDeficient(28123)))]
  console.log(clearedArray)
  console.log(clearedArray.length)
  console.log(clearedArray[clearedArray.length -1 ])
  function findDifference(arr1 , arr2){
    var sum = 0 , sum1 = 0 
    for(let d = 0; d < arr1.length; d++){
      sum += arr1[d]
    
    }
    for(let s = 0; s < arr2.length; s++){
      sum1 += arr2[s]
    }
    return sum - sum1
  }
 
  console.log((pushDeficient(28123)));
  console.log(combinationTwoItemsOfArray(pushDeficient(28123))[combinationTwoItemsOfArray(pushDeficient(28123)).length -1];
  console.log(potentialAbundantArr);
  console.log(findDifference(potentialAbundantArr , clearedArray ));
  