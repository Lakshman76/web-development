let button = document.getElementById("btn");

button.addEventListener("click",()=>{
    let name = document.getElementById("name").value;
    let output = document.getElementById("count");

    let nameArr = name.split('');
    let count = 0;
    for (let i = 0; i < nameArr.length; i++) {
        if (nameArr[i] ==='a' || nameArr[i] ==='A' || nameArr[i] ==='e' || nameArr[i] ==='E' || nameArr[i] ==='i' || nameArr[i] ==='I' || nameArr[i] ==='o' || nameArr[i] ==='O' || nameArr[i] ==='u' || nameArr[i] ==='U') {

            count++;
        }        
    }
    output.innerText=count;
    output.style.color="white"
    output.style.display="flex";
    output.style.justifyContent="center";
    output.style.alignItems = "center";
})