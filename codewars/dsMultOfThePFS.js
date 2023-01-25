//There is an obvius property you can see: the sum of the divisors of a number is divisible by the sum of its prime factors.

//We need the function ds_multof_pfs() that receives two arguments: nMin and nMax, as a lower and upper limit (inclusives), respectively, and outputs a sorted list with the numbers that fulfill the property described above.

//We represent the features of the described function:

//ds_multof_pfs(nMin, nMax) -----> [n1, n2, ....., nl] # nMin ≤ n1 < n2 < ..< nl ≤ nMax
//Let's see some cases:

//ds_multof_pfs(10, 100) == [12, 15, 35, 42, 60, 63, 66, 68, 84, 90, 95]

//ds_multof_pfs(20, 120) == [35, 42, 60, 63, 66, 68, 84, 90, 95, 110, 114, 119]


// this solution is not perfect for larger capacities... 

function dsMultofPfs(n1, n2) {
  let resultArr = [];
  for (let i = n1; i <= n2; i++) {
    if (divisorSum(i) % primeFactorSum(i) == 0) {
      resultArr.push();
    }
  }
  return resultArr;
}

function primeFactorSum(num) {
  let resultSum = 0;
  let dependableNum = num;
  for (let j = 2; j < num; j++) {
    if (isPrime(j)) {
      while (dependableNum % j == 0) {
        dependableNum = dependableNum / j;
        resultSum += j;
      }
    }
  }
  return resultSum;
}

function divisorSum(num) {
  let resultDivisorSum = 0;
  for (let n = 1; n <= num; n++) {
    if (num % n == 0) {
      resultDivisorSum += n;
    }
  }
  return resultDivisorSum;
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

console.log(primeFactorSum(20));


//second solution trying ....

