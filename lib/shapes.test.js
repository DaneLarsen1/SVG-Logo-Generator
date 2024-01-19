const Circle = require('./shapes/circle');
const Square = require('./shapes/square');
const Triangle = require('./shapes/triangle');

test('Circle renders correct SVG', () => {
  const circle = new Circle('red');
  expect(circle.render()).toBe('<circle cx="50" cy="50" r="50" fill="red" />');
});

test('Square renders correct SVG', () => {
  const square = new Square('blue');
  expect(square.render()).toBe('<rect width="100" height="100" fill="blue" />');
});

test('Triangle renders correct SVG', () => {
  const triangle = new Triangle('green');
  expect(triangle.render()).toBe('<polygon points="50,15 100,100 0,100" fill="green" />');
});
