function isOre(n) {
  if (Number.isInteger(harmonicCalculation(n))) {
    return true;
  } else {
    return false;
  }
}

function harmonicCalculation(x) {
  let counter = 0;
  let numeratorSum = 0;
  for (let i = 1; i <= x; i++) {
    if (x % i == 0) {
      counter++;
      numeratorSum += x / i;
    }
  }

  return counter / (numeratorSum / x);
}

// console.log(isOre(6))
// console.log(harmonicCalculation(6))
// console.log(harmonicCalculation(28))
console.log(harmonicCalculation(117800));
