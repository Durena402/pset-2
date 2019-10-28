const readlineSync = require("readline-sync");

const salary = Number (readlineSync.question("\nAnnual Salary: "));
let check = salary / 24;
const contribution = check * .93;
const federal = contribution * .157;
const state =  contribution * .0447;
const social = contribution * .062;
const medicare = contribution * .0145;
const final = contribution - (federal + state + social + medicare);
const pay = final.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log ("\nYour take-home pay each check will be $" + pay + ".\n");
