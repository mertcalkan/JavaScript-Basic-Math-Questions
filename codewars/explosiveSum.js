var counter = 0;
var d = 0;
var boolAddStartPoint = true;
var dependableNum;
function explosing(number) {
   console.log(number)
  var dependableNum = number;
  while (dependableNum >= d) {
    counter++;
    dependableNum--;
    d++;
  }
  if (dependableNum < d && dependableNum != 0 && number > 2) {
    number--;
    d = 1;
    explosing(number);
  }
  return counter;
}


// console.log(explosing(3));
console.log(explosing(4));
// console.log(explosing(10));
//  console.log(explosing(11));
