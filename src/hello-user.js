const readlineSync = require("readline-sync");

const question = readlineSync.question("\nHi! What's your name?");
const name = readlineSync.question("")

console.log("\nHello, " + name + "!\n");
