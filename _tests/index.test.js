const { sum, multiply, subtract } = require('../src/index');

test('1 + 2 should be 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('1 * 2 should be 2', () => {
    expect(multiply(1, 2)).toBe(2);
});

test('2 - 1 should be 1', () => {
    expect(subtract(2,1)).toBe(1);
});