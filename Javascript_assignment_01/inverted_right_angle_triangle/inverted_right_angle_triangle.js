let button = document.getElementById("btn");

button.addEventListener("click",()=>{

    let lines = document.getElementById("input").value;
    let output = document.getElementById("output");
    output.innerText = "";
    for (let i = 1; i <= lines; i++) {
        
        for (let j = 1 ; j <= lines-i+1; j++) {
            output.innerText +=" *";
        }
        output.innerText += '\n';
    }
    // for (let i = 1; i <= lines; i++) {
    //     for (let j = 1; j < i; j++) {
    //       output.innerText += "";
    //     }
    //     for (let k = i; k <= lines; k++) {
    //       output.innerText += " *";
    //     }
    //     output.innerText += "\n";
    //   }
});