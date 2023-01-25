var sum = 0;
function smartSum(){
    
    for(let i = 0 ; i < arguments.length ; i++){
        if(Array.isArray(arguments[i])){
            
            smartSum(arguments[i])
        }
        else{
        sum += arguments[i]
        }
    }
    return sum
}

console.log(smartSum(1,2,3,6));