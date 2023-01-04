//2¹⁵ = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//What is the sum of the digits of the number 21000?
var sum = 0 ;
var str = BigInt(Math.pow(2,1000)).toString()

for(let i = 0; i < str.length ; i++){
 sum += Number(str[i])
}
console.log(sum)