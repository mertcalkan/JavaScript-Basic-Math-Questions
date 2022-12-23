//Smallest multiple
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var array = []

for(let i =20 ; i>0 ; i--){
    for(let j = 0; j<array.length; j++){
        if(i % array[j] == 0){
            array.splice(array[j] , 1)
        }
    }

    
}


