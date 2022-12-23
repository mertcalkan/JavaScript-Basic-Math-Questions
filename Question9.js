//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

//a² + b² = c² 
//For example, 32 + 42 = 9 + 16 = 25 = 52.

//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.



for(let a = 0; a<400; a++){
    for(let b=0; b<400; b++){
        if(!(a < b < Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) &&  Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) + a + b == 1000)) {
            console.log("no")
            console.log( Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) + a + b)
            

    }
        else if( a < b < Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) && Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) + a + b == 1000) {
            console.log("yes")
            console.log(a)
            console.log(b)
            console.log( Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) + a + b)
            break

    }
    
}
}


