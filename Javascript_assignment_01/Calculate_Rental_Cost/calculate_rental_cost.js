const calculate = document.getElementById("btn");
let output = document.getElementById("output");

calculate.addEventListener("click", ()=>{
    let days = document.getElementById("day").value;
    let rentalType = document.getElementById("Rental").value;
    if(rentalType == "Economy"){
        output.value = days+" X 4,000 = "+4000 * days;
    }else if(rentalType == "Midsize"){
        output.value = days+" X 10,000 = "+10000 * days;
    }else if(rentalType == "Luxury"){
        output.value = days+" X 20,000 = "+20000 * days;
    }
    else {
        output.value = "undefined";
    }
})