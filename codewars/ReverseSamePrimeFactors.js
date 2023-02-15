function sameFactRev(nMax) {
  var array = [];

  for (var j = 2; j < nMax; j++) {
    if (j != reversal(j)) {
      if (
        JSON.stringify(primeFacArr(j)) ==
        JSON.stringify(primeFacArr(reversal(j)))
      ) {
        array.push(j);
      }
    }
  }

  return array;
}

function primeFacArr(num) {
  var arr = [];
  for (let k = 2; k <= num; k++) {
    if (num % k == 0 && isPrime(k)) {
      arr.push(k);
      num = num / k;
    }
  }
  return arr;
}
function reversal(num) {
  var numStr = num.toString();
  var numRev = "";
  for (let n = numStr.length; n > 0; n--) {
    numRev += numStr[n - 1];
  }
  return Number(numRev);
}

function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  var m = Math.sqrt(n); //returns the square root of the passed value
  for (var i = 2; i <= m; i++) if (n % i == 0) return false;
  return true;
}
