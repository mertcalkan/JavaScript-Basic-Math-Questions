//Array of Multiples
//Create a function that takes two numbers as arguments (num, length) and returns an array of 
//multiples of num until the array length reaches length.
function arrayOfMultiplies(num, length){
    var array = [];
    for(let i = 1 ; i <= length ; i++){
        array.push(num*i)
    }
    return array

}