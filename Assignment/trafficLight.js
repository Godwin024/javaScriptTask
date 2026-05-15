const prompt = require("prompt-sync")();

const trafficSigns = prompt("Enter your command: ");

if (trafficSigns.toUpperCase() === "GREEN") {
    console.log("Go");

} else if (trafficSigns.toUpperCase() === "RED") {
    console.log("Stop");

} else if (trafficSigns.toUpperCase() === "YELLOW") {
    console.log("Get Ready");
} else {
    console.log("Invalid Command");
}
