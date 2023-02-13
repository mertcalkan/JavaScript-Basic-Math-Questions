function step(g, m, n) {
  var arr = [];
    for(let i = m ; i < n ; i++){
        if(isPrime(i) && isPrime(i+g)){
            arr.push(i)
            arr.push(i + g)
        }
        if(arr.length == 2){
            return arr;  
        }
        
    }
    if(arr.length == 0){
        return null;
    }
 
}

function isPrime(num) {
  var isPrime = true;
  for (let j = 2; j < num; j++) {
    if (num % j == 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
  return isPrime;
}

console.log(step(2, 100, 110));
console.log(step(6, 100, 110));
