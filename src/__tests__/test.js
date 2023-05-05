import calcLiving from '../app';

test.each([
  ['любитель', 8, 'critical'],
  ['эксперт', 50, 'wounded'],
  ['герой', 88, 'healthy'],
])('%s test %i', ({ name, health, expected }) => {
  const condition = calcLiving({ name, health });
  expect(condition).toBe(expected);
  expect(condition).toEqual(expected);
});
