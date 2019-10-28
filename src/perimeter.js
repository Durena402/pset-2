const readlineSync = require("readline-sync");

const width = Number (readlineSync.question("\nWidth: "));
const length = Number (readlineSync.question("Length: "));
let c = 2 * width + 2 * length;
const centimeters = (c * 2.54);
const area = centimeters.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log ("\nA(n) " + width + "-by-" + length + "inch sheet of paper has a perimeter of " + area + " centimeter(s).\n");
