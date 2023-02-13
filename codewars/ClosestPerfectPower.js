// still continue to solve....
function closestPower(n) {
  
    if (Number.isInteger(n)) {
      if(n <= 4 ){
          return 4;
      }
      if (isPerfectPower(n)) {
        return n;
      } else {
       return selfNotPerfectPower(n);
      }
    } else {
      if (isPerfectPower(Math.floor(n))) {
        return Math.floor(n);
      } else if (isPerfectPower(Math.round(n))) {
        return Math.round(n);
      } else {
       return selfNotPerfectPower(n);
      }
    }
  }
  
  function selfNotPerfectPower(n) {
      
     var willDecrease = Math.floor(n);
     var willIncrease = Math.round(n);
    while (!isPerfectPower(willIncrease)) {
      willIncrease++;
    }
   
    while (!isPerfectPower(willDecrease)) {
      willDecrease--;
    }
    
    if (n - willDecrease > willIncrease - n) {
      return willIncrease;
    } else if (n - willDecrease < willIncrease - n) {
      return willDecrease;
    } else if (n - willDecrease == willIncrease - n) {
      return willDecrease;
    }
   
  }
  function isPerfectPower(n) {
    var bool = false;
    for (let i = 2; i <= Math.round(Math.pow(n, 1 / i)) + 20; i++) {
      if (Number.isInteger(Math.pow(n, 1 / i))) {
        bool = true;
      } else {
        continue;
      }
    }
    return bool;
  }

console.log(closestPower(123321456654))


