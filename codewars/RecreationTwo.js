function prod2sum(a, b, c, d) {
  var array = [];
  var values = [];
  var summationRef = (a ** 2 + b ** 2) * (c ** 2 + d ** 2);
  for (let h = 1; h < summationRef; h++) {
    if (perfectSquare(summationRef - h ** 2) && !values.includes(h)) {
      array.push([h, Math.sqrt(summationRef - h ** 2)]);
      values.push(h);
      values.push(Math.sqrt(summationRef - h ** 2));
    }
    if (array.length == 2) {
      return array;
    }
  }
  if (array.length == 1) {
    return array
  }
}

function perfectSquare(num) {
  if (Number.isInteger(Math.sqrt(num))) {
    return true;
  } else {
    return false;
  }
}
console.log(prod2sum(1, 2, 1, 3));
console.log(perfectSquare(Math.sqrt(50) - 1, Math.sqrt(50) + 1));
console.log((Math.sqrt(50) - 1) * (Math.sqrt(50) + 1));
console.log(prod2sum(1, 1, 3, 5));
console.log(prod2sum(2, 3, 4, 5));
console.log(Number.isInteger(6.342));
