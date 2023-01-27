function procArrInt(arr) {
  var paralizedIndexArr = [];
  var resArr = [];
  var arrLength = arr.length;
  var counter = 0;
  var amountDivisorArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      counter++;
    }
  }

  for (i = 0; i < arr.length; i++) {
    amountDivisorArr.push(amountDivisor(arr[i]));
    paralizedIndexArr.push(arr[i]);
  }

  var cArray = [
    Math.max.apply(Math, amountDivisorArr),
    [
      paralizedIndexArr[
        amountDivisorArr.indexOf(Math.max.apply(Math, amountDivisorArr))
      ],
    ],
  ];
  resArr = [arrLength, counter, cArray];
  return resArr;
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

function amountDivisor(number) {
  let res = 0;
  for (let j = 0; j <= number; j++) {
    if (number % j == 0) {
      res++;
    }
  }
  return res;
}

console.log(
  procArrInt([
    386, 5, 149, 278, 160, 91, 424, 429, 305, 436, 52, 58, 188, 190, 288, 72,
    458, 460, 461, 462, 207, 211, 214, 335, 356, 381,
  ])
);

console.log(
  procArrInt([
    258, 402, 279, 153, 423, 424, 430, 49, 51, 58, 193, 199, 330, 369, 465, 468,
    469, 86, 352, 97, 99, 358, 364, 113, 499, 372,
  ])
);
