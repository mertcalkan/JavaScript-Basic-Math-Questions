//The pair of integer numbers (m, n), such that 10 > m > n > 0, (below 10), that its sum, (m + n), and rest, (m - n), are perfect squares, is (5, 4).

//Let's see what we have explained with numbers.

//5 + 4 = 9 = 3²
//5 - 4 = 1 = 1²
//(10 > 5 > 4 > 0)
//The pair of numbers (m, n), closest to and below 50, having the property described above is (45, 36).

//45 + 36 = 81 = 9²
//45 - 36 = 9 = 3²

//(50 > 45 > 36 > 0)
//Let's see some cases:


//closestPairTonum(10) == [5, 4] // (m = 5, n = 4)

//closestPairTonum(30) == [29, 20]

//closestPairTonum(50) == [45, 36]


function closestPairTonum(number) {
  let array = [];
  let x, y;
  for (x = 0; x < number; x++) {
    for (y = 1; y < x; y++) {
      if (
        Number.isInteger(Math.sqrt(x + y)) &&
        Number.isInteger(Math.sqrt(x - y))
      ) {
        array = [x, y];
      }
    }
  }

  return array;
}

console.log(closestPairTonum(50));
