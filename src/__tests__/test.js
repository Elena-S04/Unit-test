import { calcLiving } from '../app.js';

test.each([
  ['любитель', 8, 'critical'],
  ['эксперт', 50, 'wounded'],
  ['герой', 88, 'healthy'],
])('test', ({ _, health, expected }) => {
  const condition = calcLiving({ health });
  expect(condition).toBe(expected);
  expect(condition).toEqual(expected);
});
