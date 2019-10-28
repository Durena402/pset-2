const readlineSync = require("readline-sync");

const width = Number (readlineSync.question("\nWidth: "));
const length = Number (readlineSync.question("Length: "));
let c = width * length;
const millimeters = (c*25.4*25.4);
const area = millimeters.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log ("\nA(n) " + width + "-by-" + length + "inch sheet of paper has an area of " + area + " square millimeter(s).\n");
