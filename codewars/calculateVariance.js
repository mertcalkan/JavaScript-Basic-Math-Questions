function variance(arr){
 var result = 0;
 var varianceResult = 0;
 for(let i = 0 ; i < arr.length; i++){
    result += arr[i]
 }
 result = result / arr.length;
 for(let j = 0 ; j < arr.length; j++){
    varianceResult += Math.pow(arr[j] - result , 2)
 }
 return varianceResult / arr.length
}
