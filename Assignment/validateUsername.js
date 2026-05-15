const prompt = require("prompt-sync")();

let validateUser = prompt("Enter your unsername: ");

let password = prompt("Enter your password: ");

function username(validateuser,password){
    
    if(validateUser > 2  && password  > 8){
    console.log("Login successful")
} else {
    console.log("invalid")
}
    return username;
 
}
