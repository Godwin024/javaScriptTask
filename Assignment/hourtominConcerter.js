const prompt = require("prompt-sync")();

function hoursToMinutes(hours) {
    return hours * 60;
}

let hours = Number(prompt("Enter hours: "));

console.log(hours);
