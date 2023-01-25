//Absolute Sum
//Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
function getAbsSum(array){
    var sum = 0;
    for(let i = 0; i < array.length ; i++){
        sum += Math.abs(array[i])
    }
    return sum
}

console.log(getAbsSum([1,2,3,4,-6]))