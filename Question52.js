//It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

//Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
function haveMatchingElements(firstArray, secondArray) {
  var stringsInFirstArray = parse(firstArray, "string"),
    stringsInSecondArray = parse(secondArray, "string"),
    numbersInFirstArray = parse(firstArray, "number"),
    numbersInSecondArray = parse(secondArray, "number"),
    stringResults = compare(stringsInFirstArray, stringsInSecondArray),
    numberResults = compare(numbersInFirstArray, numbersInSecondArray);

  if (stringResults && numberResults) {
    return true;
  }
  return false;

  function parse(array, type) {
    var arr = [];
    arr = array.sort().filter(function (index) {
      if (typeof index == type) return index;
    });
    return arr;
  }

  function compare(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) return false;
    for (var i = firstArray.length; i--; ) {
      if (firstArray[i] !== secondArray[i]) return false;
    }
    return true;
  }
}

function checkDigitReplace(n1, n2) {
  var bool;
  var n1Arr = [],
    n2Arr = [];
  for (let l = 0; l < n1.toString().length; l++) {
    n1Arr.push(Number(n1.toString()[l]));
  }
  for (let l = 0; l < n2.toString().length; l++) {
    n2Arr.push(Number(n2.toString()[l]));
  }

  if (
    haveMatchingElements(n1Arr, n2Arr) &&
    haveMatchingElements(n1Arr, n2Arr)
  ) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}
function findSmallest(){
 var result = 0;
for (let i = 100; i <= 125874325; i++) {
   
  if (
    checkDigitReplace(i, i * 2) &&
    checkDigitReplace(i, i * 3) &&
    checkDigitReplace(i, i * 4) &&
    checkDigitReplace(i, i * 5) &&
    checkDigitReplace(i, i * 6)
  ) {
    result = i
    break
   }
   else{
    continue
   }
   
}
return result

 
}

console.log(checkDigitReplace(243, 234));
console.log(checkDigitReplace(125874,251748))
console.log(findSmallest())
