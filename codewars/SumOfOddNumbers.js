//Given the triangle of consecutive odd numbers:

//             1
//          3     5
//       7     9    11
//   13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n){
    let result = 0;
    let arr = []
    let parameterSum = 0 ; 
    let numberStart = 1;
    let counter = 0;
    for(let i = 1 ; i <= n; i++){
        parameterSum += i   
    }
    
    while (counter < parameterSum){
        if(numberStart % 2 == 1){
            arr.push(numberStart)
            counter ++
        }
        numberStart++
    }
    let lastArr = arr.slice(-n);
    for(let i = 0 ; i < lastArr.length ; i++){
        result += lastArr[i]
    }
    return result
    
}

console.log(rowSumOddNumbers(3))

