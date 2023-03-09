let button = document.getElementById("result");
let result = document.getElementById("final-result");

button.addEventListener("click", operation);

function operation() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let operator = document.getElementById("operator").value;
  
    switch (operator) {
        case "+":
            result.innerText = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            result.innerText = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            result.innerText = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            result.innerText = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            alert("Invalid operator");
            break;
    }
}
 
let reset = document.getElementById("reset");
reset.addEventListener("click", clear);
function clear(){
    let num1 = document.getElementById("number1");
    let num2 = document.getElementById("number2");
    let operator = document.getElementById("operator");
    num1.value="";
    num2.value="";
    operator.value="";
    result.innerText="";
}