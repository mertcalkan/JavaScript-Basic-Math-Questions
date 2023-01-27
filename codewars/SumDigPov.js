// The next number in having this property is 135135135:

// See this property again: 135=1^1+32+53135 

 

// Task
// We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

function sumDigPow(a, b) {
    var arr = []
    for (let num = a ; num < b ; num++){
        if(isHavingProperty(num)){
            arr.push(num)
        }
    }
    return arr
  }

  function isHavingProperty(number){
    var sum = 0;
    for(let j = 0; j < number.toString().length ; j++){
        sum += Math.pow(Number(number.toString()[j]) , j+1)
    }
    
    if(number == sum){
        return true
    }
    else 
    return false
  }
  console.log(isHavingProperty(135))
  console.log(sumDigPow(1,14630))


  