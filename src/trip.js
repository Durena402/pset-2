const readlineSync = require("readline-sync");

const students = Number (readlineSync.question("\nStudents: "));
const teachers = Number (readlineSync.question("Teachers: "));
const capacity = Number (readlineSync.question("Bus Capacity: "));
let passengers = students + teachers;
let lastBus = passengers % capacity;
let busNumber = Math.ceil (passengers / capacity);
console.log("\n"+ busNumber + " bus(es) is (are) needed, with " + lastBus +  " passenger(s) on the last bus.\n");
