"use strict";

var _require = require('../src/index'),
    sum = _require.sum,
    multiply = _require.multiply,
    subtract = _require.subtract,
    square = _require.square;

test('1 + 2 should be 3', function () {
  expect(sum(1, 2)).toBe(3);
});
test('1 * 2 should be 2', function () {
  expect(multiply(1, 2)).toBe(2);
});
test('2 - 1 should be 1', function () {
  expect(subtract(2, 1)).toBe(1);
});
test('Square of 2 should be 4', function () {
  expect(square(2)).toBe(4);
});