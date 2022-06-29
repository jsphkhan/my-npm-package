"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utilMultuply = utilMultuply;
exports.utilSum = utilSum;

function utilSum(a, b) {
  console.log('** easy to locate **');
  return a + b;
}

function utilMultuply(a, b) {
  console.log('** should tree shake **');
  return a * b;
}