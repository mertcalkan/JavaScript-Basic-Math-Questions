function minLengthNum(ordMax , numDig){
 for(let j = 0 ; j < numDig; j++ ){
    if(ordMax = Number.toString(calculatePattern(j)) ){
        return [true , j]
    }
    else{
        continue
    }
 }
 return [false , -1]
}  

function calculatePattern(number){
    var result = 0;
    if(number == 0){
        result = 0
    }
    else if(number == 1){
        result = 1
    }
    else{
        for(let i = 0 ; i < number; i++ ){
         result += Math.pow(i , number-i)   
        }
    }
    return result

}