//Tuck in Array
//Create a function that takes two arrays and insert the second array in the middle of the first array.
//Examples
//tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
//tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

function tuckIn(array1 , array2){
  let result = []
  result.push(array1[0])
  for(let j = 0 ; j < array2.length; j++){
    result.push(array2[j])
  }
  result.push(array1[1])
  return result
  
}
