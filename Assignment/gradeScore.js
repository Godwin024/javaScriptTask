const prompt = require("prompt-sync")();

const grades = Number(prompt("Enter your garde: "));

if(grades >= 70){
    console.log("A")

} else if(grades >= 60){
    console.log("B")

} else if(grades >=  50){
    console.log("C")

}else if (grades >= 40){
    console.log("D")

} else{
console.log("F")
}


 
