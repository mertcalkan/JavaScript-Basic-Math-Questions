function multTriangle(n) {
    var result = 0;
    let array = []
    var oddResult = 0;
    for(let i = 1; i <= n ; i++){
        result += i
    }

    for(let i = 1 ; i <= n ; i++){
        for(let j = 1 ; j <= n ; j++){
            if((i * j) % 2 == 1){
                oddResult += i*j
            }
        }
    }
    let sum = Math.pow(result , 2) 
    array = [sum, sum - oddResult , oddResult]
    return array;
}

console.log(multTriangle(5))