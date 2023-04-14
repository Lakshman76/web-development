const butn = document.getElementById("btn");
const colorChanger = () => {
    let hexCode = "0123456789ABCDEF";
    let cons="#";
    for (let i = 0; i < 6; i++) {
        cons = cons + hexCode[Math.floor(Math.random() * 16)];        
    }
    return cons;
};
function set_bgc(){
    document.body.style.backgroundColor = colorChanger();
}
butn.addEventListener("click", set_bgc);
