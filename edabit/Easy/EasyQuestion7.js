//Phone Number Formatting
//Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function formatPhoneNumber(array){
    var str = "(";
    for(let i = 0 ; i < 3 ; i++){
        str += array[i]
    }
    str += ") "
    for(let j = 3 ; j < array.length ; j++){
        str += array[j]
        if(j == 5){
            str += "-"
        }
    }
    return str
}