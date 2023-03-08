let password = document.getElementById("password");
let cnfrm_password = document.getElementById("cnfrm-password");
let submit = document.getElementById("submit");

submit.addEventListener("click",validator);
function validator(){
    if (password.value === cnfrm_password.value) {
        alert("Password Matched \n Password Validation Successful");
    }
    else{
        alert("Password didn't Match \n Password Validation Unsuccessful")
    }
}