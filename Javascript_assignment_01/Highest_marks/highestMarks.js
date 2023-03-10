
let button = document.getElementById("btn");
let output = document.getElementById("output");
let marks = [];

function HighestMarks(){
    let student1 = document.getElementById("student1");
    let student2 = document.getElementById("student2");
    let student3 = document.getElementById("student3");
    let student4 = document.getElementById("student4");
    let student5 = document.getElementById("student5");

    for (let i = 0; i < 5; i++) {
        marks[i] = parseInt(document.getElementById("student" +(i+1)).value);
    }

    let highest =marks[0];
    let highestIndex=0
    for (let i = 1; i < marks.length; i++) {
        if(marks[i] > highest){
            highest=marks[i];
            highestIndex=i;
        }
    }
    output.innerText="Student "+(highestIndex+1)+" contains "+highest+" which is highest";
}
button.addEventListener("click", HighestMarks);