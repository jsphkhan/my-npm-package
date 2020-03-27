"use strict";
/** 
 * Sum of two number
 * @param a {Number}
 * @param b {number}
 * @returns {Number}
*/

var sum = function sum(a, b) {
  return a + b;
};
/** 
 * Multiply two numbers
 * @param a {Number}
 * @param b {number}
 * @returns {Number}
*/


var multiply = function multiply(a, b) {
  return a * b;
};
/** 
 * Subtract two numbers
 * @param a {Number}
 * @param b {number}
 * @returns {Number}
*/


var subtract = function subtract(a, b) {
  return a - b;
};
/** 
 * Divide two numbers
 * @param a {Number}
 * @param b {number}
 * @returns {Number}
*/


var divide = function divide(a, b) {
  return a / b;
};
/** 
 * Modulus
 * @param a {Number}
 * @param b {number}
 * @returns {Number}
*/


var remainder = function remainder(a, b) {
  return a % b;
};

module.exports = {
  sum: sum,
  multiply: multiply,
  subtract: subtract,
  divide: divide,
  remainder: remainder
};