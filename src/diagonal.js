const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
let c = width * width + length * length;
c = Math.sqrt(c);
const diagonal = c.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log ("\nA(n) " + width + "-by-" + length + "inch sheet of paper has a diagonal of " + diagonal + " inch(es).\n");
