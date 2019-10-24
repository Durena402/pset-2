const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
let a =  width;
let b = length;
let c = 2*a+2*b;
const centimeters = (c*2.54);
const area = centimeters.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log ("\nA(n) " + a + "-by-" + b + "inch sheet of paper has a perimeter of " + area + " centimeter(s)");
