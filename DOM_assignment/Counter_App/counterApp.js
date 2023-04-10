let decrementBtn = document.getElementById("decrementBtn");
let incrementBtn = document.getElementById("incrementBtn");
let resetBtn = document.getElementById("resetBtn");
let value = document.getElementById("value");

// Decrement logic
decrementBtn.addEventListener("click", decrement);
function decrement(){
    let org_value = Number(value.innerText);
    org_value--;
    value.innerText=org_value;
};

// Increment logic 
incrementBtn.addEventListener("click", increment);
function increment(){
    let org_value = Number(value.innerText);
    org_value++;
    value.innerText=org_value;
}

// Reset value logic
resetBtn.addEventListener("click", reset);
function reset(){
    value.innerText=0;
}
