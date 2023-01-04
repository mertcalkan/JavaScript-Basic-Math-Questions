function countingFractions() {

  var count = 0 
  for (let i = 1000000; i > 0; i--) {  
    for (let n = 1; n < i; n++) {
      
       if(primeAmong(n , i)){
        count ++
       }
    }
    
  }
  return count
   
}



function primeAmong(num1, num2) {
  var bool = false
  if (num1 === 1) {
    bool = true;
    
  } 
  else {
    for (let v = 2; v <= num1; v++) {
      if (num1 % v == 0 && num2 % v == 0 && num1 != 1 && num2 != 1) {
       bool = false 
       break;
      } else {
        bool = true
      }
    }
  }
  return bool
}
console.log(primeAmong(23523531 , 235263634))
console.log(countingFractions())


