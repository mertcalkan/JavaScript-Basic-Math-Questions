function digitalRoot(n){
    let result = sumOfDigits(n)  
    if(result >= 10){
        while (result >= 10){
            result = sumOfDigits(result)
        }
    } 
   
    return result
}

function sumOfDigits(num){
    var str = num.toString();
    let sum = 0;
    for(let i = 0 ; i < str.length ; i++){
        sum += Number(str[i])
    }
    return sum
}
console.log(sumOfDigits(10))
console.log(digitalRoot(101231242))