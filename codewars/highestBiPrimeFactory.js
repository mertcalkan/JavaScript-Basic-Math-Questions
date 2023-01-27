function highestBiPrimeFac(p1, p2, n) {
  var p1Unit = 0;
  var p2Unit = 0;
  var resultArr = [];
  var divideUnit = n;
  while (
    divideUnit % p1 != 0 ||
    divideUnit % p2 != 0 ||
    onlyDivisableBy_p1_Or_P2(divideUnit, p1, p2)
  ) {
    divideUnit--;
  }
  var refResult = divideUnit;
  resultArr.push(refResult);
  while (divideUnit % p1 == 0) {
    divideUnit /= p1;
    p1Unit += 1;
  }
  while (divideUnit % p2 == 0) {
    divideUnit /= p2;
    p2Unit += 1;
  }
  resultArr.push(p1Unit);
  resultArr.push(p2Unit);

  return resultArr;
}

function onlyDivisableBy_p1_Or_P2(x, p1, p2) {
  if (x % p1 != 0 || x % p2 != 0) {
    return false;
  } else {
    while (x % p1 == 0) {
      x /= p1;
    }
    while (x % p2 == 0) {
      x /= p2;
    }
    console.log(x);

    if (x != 1) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(onlyDivisableBy_p1_Or_P2(990, 5, 11));
console.log(onlyDivisableBy_p1_Or_P2(48, 2, 3));
