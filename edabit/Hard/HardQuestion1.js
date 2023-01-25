//Oddish vs. Evenish
//Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

//For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// function oddishOrEvenish(number){

// }

function sumOfDigits(number) {
  var dividableNumber = number;
  var index = 1
  var sum = 0;
  while (dividableNumber >= 10) {
    dividableNumber = dividableNumber / 10
    var digit = Math.floor((number - Math.pow()) / Math.pow(10 , index));
    console.log(digit)
    index++
    sum += digit; 
  }
  return sum
}

console.log(sumOfDigits(124));
