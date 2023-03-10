//Maximum Possible Total
//Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
//Examples : 
//maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43
//maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100
//maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40

function maxTotal(array){
    var maxSum = 0 
    array.sort((a, b) => a - b)
    for(let i = array.length ; i > array.length - 5 ; i--){
        maxSum += array[i-1]
    }
    return maxSum
}
console.log(maxTotal[1, 1, 0, 1, 3, 10, 10, 10, 10, 1])