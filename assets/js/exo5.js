let firstNumber = 2;
let secondNumber = 4;
let result = 0;

while (result < 250){
    result = firstNumber*secondNumber;
    secondNumber = result;
    console.log(firstNumber+" x "+secondNumber+" = "+result);
    console.log("secondNumber = " + secondNumber);
    
}