//Basic Calculator
//Create a function that takes two numbers and a mathematical operator
//+ - / * and will perform a calculation with the given numbers.

function calculator(firstNum, operator, secondNum) {
  if (operator == "*") {
    return firstNum * secondNum;
  } else if (operator == "/") {
    if (secondNum == 0) {
      return "Can't divide by 0!";
    } else {
      return firstNum / secondNum;
    }
  } else if (operator == "-") {
    return firstNum - secondNum;
  } else if (operator == "+") {
    return firstNum + secondNum;
  }
}
