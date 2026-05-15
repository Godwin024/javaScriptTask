const prompt = require("prompt-sync")();

const age = Number(prompt("Enter your age: "));

console.log(age >= 18 ? "Access Granted" : "Access Denied");
