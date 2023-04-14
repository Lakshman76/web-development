let image = document.getElementById("img");

let x = 0;
let y = 0;
document.addEventListener("keydown", (event) =>{
    if(event.key === "ArrowLeft"){
        x -= 10; // move left
    }else if (event.key === "ArrowRight") {
        x += 10; // move right
    } else if (event.key === "ArrowUp") {
        y -= 10; // move up
    } else if (event.key === "ArrowDown") {
        y += 10; // move down
    }
    image.style.position="relative";
    image.style.left = x + "px";
    image.style.top = y + "px";
});
// stop the movement
document.addEventListener("keyup", (event) =>{
    x=x;
    y=y;
});