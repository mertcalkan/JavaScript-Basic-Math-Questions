function buddy(start, limit) {
    //we'll use nested for loop here...
//  for(let i = start ; i <= limit ; i++){
//     for(let j = i ; j <)
//  }

  if ((sumDivider(start) - 1 == limit) && (sumDivider(limit) - 1 == start)) {
    if (sumDivider(start) - 1 < sumDivider(limit) - 1) {
      return [sumDivider(start) - 1, sumDivider(limit) - 1];
    } else {
      return [sumDivider(limit) - 1, sumDivider(start) - 1];
    }
  } else {
    return "Nothing";
  }
}

function sumDivider(number) {
  let result = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      result += i;
    }
  }
  return result;
}


console.log(sumDivider(10))
console.log(buddy(10,50))
