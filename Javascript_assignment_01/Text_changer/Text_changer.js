const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", ()=>{
    if(text.innerText === "The most affordable learning platform"){
        text.innerText = "PW Skills";
    }
    else{
        text.innerText = "The most affordable learning platform";
    }
})