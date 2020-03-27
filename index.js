/** 
 * Sum of two number
 * @param a {Number}
 * @param b {number}
 * @returns {Number}
*/
const sum = (a, b) => {
    return a + b;
}

/** 
 * Multiply two numbers
 * @param a {Number}
 * @param b {number}
 * @returns {Number}
*/
const multiply = (a, b) => {
    return a * b;
}


/** 
 * Subtract two numbers
 * @param a {Number}
 * @param b {number}
 * @returns {Number}
*/
const subtract = (a, b) => {
    return a - b;
}


/** 
 * Divide two numbers
 * @param a {Number}
 * @param b {number}
 * @returns {Number}
*/
const divide = (a, b) => {
    return a / b;
}

module.exports = {
    sum: sum,
    multiply: multiply,
    subtract: subtract,
    divide: divide
}