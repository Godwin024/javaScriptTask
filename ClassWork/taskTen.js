const prompt = require ("prompt-sync")();

const number = prompt("Enter your number: ")


if(number > 0){
console.log("It is a posetive number")
}else if(number < 0 ){
console.log("it is a negative number")
}else if(number == 0){
console.log("The number is 0")
}else{
console.log("invalid")
}
