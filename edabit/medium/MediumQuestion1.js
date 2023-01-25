//Find Number of Digits in Number
//Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

function calculateDigits(num) {
  if (num == 0) {
    return 1;
  }
  numDigits = 0;
  integers = Math.abs(num);

  while (integers > 0) {
    integers = (integers - (integers % 10)) / 10;
    numDigits++;
  }
  return numDigits;
}

console.log(calculateDigits(100));
