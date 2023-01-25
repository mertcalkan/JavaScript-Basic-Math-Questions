//Sum Of Cubes
//Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(array){
    var sum = 0;
    if(array.length != 0){
        for(let i = 0 ; i < array.length; i++ ){
            sum += Math.pow(array[i],3)
        }
    }
    return sum
}
