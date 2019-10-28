const readlineSync = require("readline-sync");
const boardSurfaceArea = 48 * 24;
const circleSurfaceArea= Math.PI * 3**2;
const surfaceArea= boardSurfaceArea - circleSurfaceArea;
const final = surfaceArea.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nThe surface area of a standard Cornhole board is " + final + " square inch(es).\n")
