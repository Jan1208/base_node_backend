import { sum } from '../src/utils/maths';

test('1 + 2 have to be equal to 3', () => {
  expect(sum(1, 2)).toBe(3);
});
