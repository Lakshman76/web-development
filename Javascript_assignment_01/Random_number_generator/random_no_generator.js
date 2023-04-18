const button = document.getElementById("btn");
const random_no = document.getElementById("input-box");

button.addEventListener("click", () => {
    const num = Math.floor(Math.random()*100);
    random_no.value = num;
})