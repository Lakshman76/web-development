/**
 * get username
 * ask withdraw / deposit
 * when withdraw --> total-amount if < 0 print insufficient balance
 * when deposit  --> total+amount
 */
const result = document.getElementById('output');
const submitButton = document.getElementById('Deposit-withdraw');
const checkButton = document.getElementById("btn");

const moneyType = document.getElementById('money');
moneyType.addEventListener("change", () => {
    submitButton.value = moneyType.value;
    submitButton.style.width = "200px";
});

let totalAmount = 0;

submitButton.addEventListener("click", () => {
    const  moneyTypes = moneyType.value
    const userName = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (moneyTypes === "Deposit Money") {
        totalAmount += parseInt(amount);
        submitButton.value = "Deposited";
        setTimeout(() => {
            submitButton.value = "Deposit Again";
        }, 4000);
    } else if(moneyTypes === "Withdraw Money" && amount <= totalAmount){
        totalAmount -= parseInt(amount);
        submitButton.value = "Withdrawn";
        setTimeout(() => {
            submitButton.value = "Withdraw Again";
        }, 4000);
    } else {
        result.innerHTML = alert("Insufficient Balance");
        result.innerText = "Insufficient Balance";
        submitButton.value =  'Nothing happen';
        setTimeout(() => {
            submitButton.value = "Withdraw";
        }, 4000);
    }

})
checkButton.addEventListener("click", () => {

    const userName = document.getElementById('name').value;

    if (totalAmount >= 0) {
        result.innerHTML=`Hey ${userName}, Total Amount is - ${totalAmount.toLocaleString('en-IN')}`;
    } 

})