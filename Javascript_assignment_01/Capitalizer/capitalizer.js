let button = document.getElementById("btn");

function capitalize(){
    let name = document.getElementById("name").value;
    // let capName = document.getElementById("name");
    let para = document.getElementById("para");
    if(name[0]>='A' && name[0]<='Z'){
        para.innerText="Already Capitalize!";
    }
    else{
        let nameArr = name.split('');
        nameArr[0]=nameArr[0].toUpperCase();
        name=nameArr.join('');
        document.getElementById("name").value = name;
        para.innerText='';
    }
}

button.addEventListener("click", capitalize);