<<<<<<< Updated upstream
const readlineSync = require("readline-sync");

const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
=======
const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
let a =  width;
let b = length;
let c = a*b;
const millimeters = (c*25.4*25.4);
const area = millimeters.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log ("\nA(n) " + a + "-by-" + b + "inch sheet of paper has an area of " + area + " square millimeter(s)");
>>>>>>> Stashed changes
