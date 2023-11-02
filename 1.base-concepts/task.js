"use strict";
// jshint esversion:7

function solveEquation(a, b, c) {
  let arr = [];
  let x;
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D === 0) {
    arr.push(-b / (2 * a));
  } else if (D > 0) {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let monthPay = S * (P + P / ((1 + P) ** countMonths - 1));
  let sum = monthPay * countMonths;
  return parseFloat(sum.toFixed(2));
}