const button = document.getElementById("highlight");
const text = document.getElementById("paragraph").innerText;
button.addEventListener("click", () => {
    const textArr = text.split(" ");
    const wordGreaterthan8 = textArr.map((word) =>{
    if (word.length > 8) {
        return `<span style="background-color: yellow; color: black" >${word}</span>`;
      }else{
        return word;
      }
    })
    document.getElementById("paragraph").innerHTML = wordGreaterthan8.join(" ");
}) 