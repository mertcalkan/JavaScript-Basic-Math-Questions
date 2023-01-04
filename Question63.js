//The 5-digit number, 16807=7⁵, is also a fifth power. Similarly, the 9-digit number, 134217728=8⁹, is a ninth power.
//How many n-digit positive integers exist which are also an nth power?

console.log(BigInt(Math.pow(9,22)))
function powerChecker(){
    let count = 0;
    for(let i = 1 ; i < 10 ;i++){
        for(let j = 0; j < 22; j++ ){
            if(Math.pow(i , j).toString().length == j){
                count += 1
            }
        }
    }
    return count

}

console.log(powerChecker())