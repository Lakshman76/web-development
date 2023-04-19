const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const input = document.getElementById("input").value;
    const inputArr = input.split(" ");
    const numsDivisibleBy2 = inputArr.filter((num) => {
        if(num%2 === 0 && num%3 !== 0){
            return num;
        }
    });
    output.value = numsDivisibleBy2.join(" ");
    setTimeout(() => {
        output.value = "";
    }, 4000);
})