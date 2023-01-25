//Secret Society
//A group of friends have decided to start a secret society. 
//The name will be the first letter of each of their names, sorted in alphabetical order.
//Create a function that takes in an array of names and returns the name of the secret society.

function societyName(array){
    var strArr = "";
    for(let i = 0 ; i < array.length; i++){
        strArr.push(array[i][0])
    }
    strArr.sort()

    var resultStr = "";
    for(let j = 0 ; j < strArr.length; j++){
        resultStr += strArr[i]
    }
    return resultStr
}

console.log(societyName(["Adam", "Sarah", "Malcolm"]))


