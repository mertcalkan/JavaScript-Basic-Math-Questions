//The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.


//There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

//What 12-digit number do you form by concatenating the three terms in this sequence?

function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }
console.log(isPrime(1161))
function control(){
    for(let h = 1001 ; h < 9998; h++){
       
            for(let j = 1 ; j < 9998-h; j++){
                if(isPrime( h ) && isPrime(h+j) && (isPrime (h+2*j)) && checkDigitReplace(h,h+j,h+2*j)) {
                   
                    if( j > 1000 && h + 2 * j < 10000){
                        console.log(h)
                        console.log(h+j)
                        console.log(h+2*j)
                    }
            
            }
        }
       
    }
   
}

function haveMatchingElements(firstArray, secondArray) {
    var stringsInFirstArray = parse(firstArray, 'string'),
        stringsInSecondArray = parse(secondArray, 'string'),
        numbersInFirstArray = parse(firstArray, 'number'),
        numbersInSecondArray = parse(secondArray, 'number'),
        stringResults = compare(stringsInFirstArray, stringsInSecondArray),
        numberResults = compare(numbersInFirstArray, numbersInSecondArray);

    if (stringResults && numberResults) {
        return true;
    } return false;

    function parse(array, type) {
        var arr = [];
        arr = array.sort().filter(function(index) {
            if (typeof index == type)
                return index;
        });
        return arr;
    }

    function compare(firstArray, secondArray) {
        if (firstArray.length !== secondArray.length)
            return false;
        for (var i = firstArray.length; i--;) {
            if (firstArray[i] !== secondArray[i])
                return false;
        }
        return true;
    }
}

function checkDigitReplace(n1 , n2 , n3){
    var bool
    var n1Arr = [] , n2Arr = [] , n3Arr = [];
    for(let l = 0 ; l < n1.toString().length; l++){
        n1Arr.push(Number(n1.toString()[l]))
    }
    for(let l = 0 ; l < n2.toString().length; l++){
        n2Arr.push(Number(n2.toString()[l]))
    }
    for(let l = 0 ; l < n3.toString().length; l++){
        n3Arr.push(Number(n3.toString()[l]))
    }
    
    if(haveMatchingElements(n1Arr , n2Arr) && haveMatchingElements(n1Arr , n3Arr) && haveMatchingElements(n2Arr , n3Arr)){
        bool = true
    }
    else{
        bool = false;
    }
    return bool
}
//  console.log(checkDigitReplace(1234 , 4321 , 1432))
 console.log(control())




