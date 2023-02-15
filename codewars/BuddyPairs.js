function buddy(start, limit) {
  for (let n = start; n < limit; n++) {
  
      if ( n < sumDivider(n) - 1) {
        return [n, sumDivider(n) - 1];
      } else {
        if (n == limit - 1) return "Nothing";
      }
    
    
  }
}



function sumDivider(number) {
  let result = 1;

  for (let i = 2; i < number; i++) {
    if (number % i == 0 && number / i > i ) {
      result += i + number / i;
    }
  }
  return result;
}
// console.log(sumDivider(105));
console.log(sumDivider(35))
console.log(sumDivider(64))
console.log(sumDivider(sumDivider(35) - 1) -1)
 console.log(buddy(23, 4669));
