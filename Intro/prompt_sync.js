//const prompt = require ("prompt-sync")();
//
//const age = prompt("what is your age? ")
//
//if (age > 0 && age <= 12){
//console.log("I am a child ");
//
//} else if(age > 12 && age < 18){
//
//console.log("I am a Teenager");
//
//} else if(age >=  18){
//
//console.log("Adult")
//}else {
//console.log("invalid age!");
//}


const prompt = require ("prompt-sync")();

let age = prompt("what is your age? ");

 console.log(age)


if(!age){

    console.log("login")
}else {

console.log("inValid input")
}



