let btnOne = document.getElementById("1st-converter");

btnOne.addEventListener("click", ()=>{
    let cels = document.getElementById("celsius1").value;
    let fahren = document.getElementById("fahrenheit1");
    fahren.value= c_to_f(cels);
})
function c_to_f(celsius){
    let fahrenheit = parseFloat(celsius * (9/5) +32) ;
    return fahrenheit;
}

let btnTwo = document.getElementById("2nd-converter");
btnTwo.addEventListener("click", ()=>{
    let fahren = document.getElementById("fahrenheit2").value;
    let cels = document.getElementById("celsius2");
    cels.value = f_to_c(fahren);
});
function f_to_c(fahren){
    const celsius = parseFloat([(fahren-32)*5]/9);
    return celsius;
}