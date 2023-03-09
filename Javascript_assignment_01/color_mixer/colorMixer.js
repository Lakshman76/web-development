let mixerBtn = document.getElementById("btn");
let output = document.getElementById("output");

function mixer(){
    let color1 = document.getElementById("color1").value;
    let color2 = document.getElementById("color2").value;
    let color=color1+color2;
    switch (color) {
        case "redblue":
            output.style.background="purple";
            output.innerText="purple";
            break;
        case "bluered":
            output.style.background="purple";
            output.innerText="purple";
            break;
        case "redyellow":
            output.style.background="orange";
            output.innerText="orange";
            break;
        case "yellowred":
            output.style.background="orange";
            output.innerText="orange";
            break;
        case "blueyellow":
            output.style.background="green";
            output.innerText="green";
            break;
        case "yellowblue":
            output.style.background="green";
            output.innerText="green";
            break;
        default:
            output.style.background="transparent";
            output.innerText="";
            alert("Invalid color combinition");            
            break;
    }
}
mixerBtn.addEventListener("click", mixer);