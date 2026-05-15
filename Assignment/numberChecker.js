const prompt = require("prompt-sync")();

let checker = Number(prompt("Enter your number: "))

    if(checker %2 == 0){
console.log("Even")

} else if(checker %2 !=0){

console.log("Odd");
}

console.log(checker);
