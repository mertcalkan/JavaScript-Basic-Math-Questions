// the function find_spec_partition() , will receive three arguments, n, k, and a command: 'max' or 'min'

// The function should output the partition that has maximum or minimum value product (it depends on the given command) as an array with its terms in decreasing order.

// Let's see some cases (Python and Ruby)

// find_spec_partition(10, 4, 'max') == [3, 3, 2, 2]
// find_spec_partition(10, 4, 'min') == [7, 1, 1, 1]
// and Javascript:

// findSpecPartition(10, 4, 'max') == [3, 3, 2, 2]
// findSpecPartition(10, 4, 'min') == [7, 1, 1, 1]
// The partitions of 10 with 4 terms with their products are:

// (4, 3, 2, 1): 24
// (4, 2, 2, 2): 32
// (6, 2, 1, 1): 12
// (3, 3, 3, 1): 27
// (4, 4, 1, 1): 16
// (5, 2, 2, 1): 20
// (7, 1, 1, 1): 7   <------- min. productvalue
// (3, 3, 2, 2): 36  <------- max.product value
// (5, 3, 1, 1): 15
// Enjoy it!

function findSpecPartition(n, k, com) {
  var roundedDivResult = Math.floor(n / k);
  var array = [];
  if (com == "min") {
    array.push(n - (k - 1));
    for (let j = 1; j <= k - 1; j++) {
      array.push(1);
    }
    return array;
  } else if (com == "max") {
    for (let i = 0; i < n % k; i++) {
      array.push(roundedDivResult + 1);
    }
    for (let t = 0; t < k - (n % k); t++) {
      array.push(roundedDivResult);
    }
    return array;
  } else {
    return [];
  }
}

console.log(findSpecPartition(10, 4, "min"));
console.log(findSpecPartition(10, 4, "max"));
console.log(findSpecPartition(13, 8, "max"));
