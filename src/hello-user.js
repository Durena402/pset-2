<<<<<<< Updated upstream
const readlineSync = require("readline-sync");

const name = readlineSync.question("Hi! What's your name? ");
console.log("Hello, " + name + "!");
=======
const readlineSync = require("readline-sync");

const question = readlineSync.question("\nHi! What's your name? ");
const name = readlineSync.question("");
console.log("\nHello, " + name + "!");
>>>>>>> Stashed changes
