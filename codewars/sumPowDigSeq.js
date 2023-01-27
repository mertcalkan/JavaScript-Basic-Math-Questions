// Let's take an integer number,  start and let's do the iterative process described below:

// we take its digits and raise each of them to a certain power, n, and add all those values up. (result = r1)

// we repeat the same process with the value r1 and so on, k times.

// Let's do it with start = 420, n = 3, k = 5

// 420 ---> 72 (= 4³ + 2³ + 0³) ---> 351 (= 7³ + 2³) ---> 153 ---> 153 ----> 153
// We can observe that it took 3 steps to reach a cyclical pattern [153](h = 3). The length of this cyclical pattern is 1, patt_len. The last term of our k operations is 153, last_term

// Now, start = 420, n = 4, k = 30

// 420 ---> 272 ---> 2433 ---> 434 ---> 593 ---> 7267 --->
// 6114 ---> 1554 ---> 1507 ---> 3027 ---> 2498 ---> 10929 --->
// 13139 ---> 6725 ---> 4338 ---> 4514 ---> 1138 ---> 4179 ---> 9219 --->
// 13139 ---> 6725 ---> 4338 ---> 4514 ---> 1138 ---> 4179 ---> 9219 --->
// 13139 ---> 6725 ---> 4338 ---> 4514 ---> 1138 ---> 4179 ---> 9219.....
//sum_pow_dig_seq(420, 3, 5) == [3, [153], 1, 153]

//sum_pow_dig_seq(420, 4, 30) == [12, [13139, 6725, 4338, 4514, 1138, 4179, 9219], 7, 1138]
//Constraints for tests:

//500 ≤ start ≤ 8000
//2 ≤ n ≤ 9
//100 * n ≤ k ≤ 200 * n

function sumPowDigSeq(number, n, k) {
  let mainResultArray = [];
  let array = [];
  let dependable_result = calculate_nth_powerSum(number, n);
  array.push(dependable_result);

  while (!array.includes(calculate_nth_powerSum(dependable_result, n))) {
    dependable_result = calculate_nth_powerSum(dependable_result, n);
    array.push(dependable_result);
  }

  mainResultArray.push(
    array.indexOf(calculate_nth_powerSum(dependable_result, n)) + 1
  );
  mainResultArray.push(
    array.slice(
      array.indexOf(calculate_nth_powerSum(dependable_result, n)),
      array.length
    )
  );
  let sliced = array.slice(
    array.indexOf(calculate_nth_powerSum(dependable_result, n)),
    array.length
  );
  mainResultArray.push(sliced.length);
  if (sliced.length != 1) {
    mainResultArray.push(
      sliced[((k - array.indexOf(calculate_nth_powerSum(dependable_result, n)) - 1) % sliced.length) ]
    );
  }
  else{
    mainResultArray.push(array[array.length - 1])
  }
  return mainResultArray ;
}

function calculate_nth_powerSum(x, n) {
  let cubeSum = 0;
  let strNum = x.toString();
  for (let i = 0; i < strNum.length; i++) {
    cubeSum += Math.pow(Number(strNum[i]), n);
  }
  return cubeSum;
}

console.log(sumPowDigSeq(420, 3, 5));
console.log(sumPowDigSeq(420, 4, 30));
console.log(sumPowDigSeq(420, 5, 100));
