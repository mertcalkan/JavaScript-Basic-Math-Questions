//Number of Squares in an N * N Grid
//Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
//numberSquares(2) ➞ 5

//numberSquares(4) ➞ 30

//numberSquares(5) ➞ 55

function numberSquares(num){
    var result = 0;
    for(let i = 1 ; i <= num; i++){
        result += i*i
    }
    return result

} 
console.log(numberSquares(45))