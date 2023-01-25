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

function calculateSumOfDigits(num){
    var sum = 0;
    var digits = calculateDigits(num)
    var tempNum = num
    while(digits > 0) {
       tempNum = tempNum - sum * Math.pow(10, digits -1)
       sum += Math.floor(tempNum / Math.pow(10 , digits - 1))
       console.log(tempNum)
       console.log(sum)
       digits--;
       
    }
    return sum
}

console.log(calculateSumOfDigits(234))