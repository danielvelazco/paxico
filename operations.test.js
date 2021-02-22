const operations = require('./operations');

test('adds 1 + 2 to equal 3', () => {
  expect(operations.add(1, 2)).toBe(3);
});

test('mul 5 * 3 to equal 15', () => {
  expect(operations.mul(5, 3)).toBe(15);
});

test('sub 7 - 2 to equal 5', () => {
  expect(operations.sub(7, 2)).toBe(5);
});

test('div 16 / 4 to equal 4', () => {
  expect(operations.div(16, 4)).toBe(4);
});