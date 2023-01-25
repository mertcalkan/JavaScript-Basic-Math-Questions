//An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

//You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

//Example


//findMissing([1, 3, 5, 9, 11]) == 7


function findMissing(array){
  array.sort(function(a, b) {
    return a - b;
  });
  let commonDiffArr = [];
  for(let i = 0 ; i < 3 ; i++){
    commonDiffArr.push(array[i+1] - array[i])
  }
  
  let mainDiff = mode(commonDiffArr)
  console.log(mainDiff)
  while(array[0] + mainDiff == array[1]){
    if(array[0] + mainDiff == array[1]){
      array.shift()
    }
  }
 
  return (array[0] + mainDiff)
}

function mode(arr){
  return arr.sort((a,b) =>
        arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
  ).pop();
}

console.log(findMissing([1, 2,3, 4,5,8,9]))
