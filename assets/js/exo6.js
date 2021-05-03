let firstNumber = 10;
let secondNumber = 2;
let result = 2;

while (result >= 1){
    result = firstNumber / secondNumber;
    console.log(firstNumber+" / "+secondNumber+" = "+result);
    firstNumber = result;
    console.log("firstNumber = " + firstNumber);
}