import Validator from '../app';

const forTest = [
  ['name', true],
  ['1Name', false],
  ['Name1', false],
  ['Na-156_m5e', true],
  ['Name5', false],
  ['-Name', false],
  ['_Name', false],
  ['Name_', false],
  ['Name-', false],
  ['__Name__', false],
  ['-Name-', false],
  ['NaМe', false],
  ['_Na#me', false],
  ['Name$', true],
  ['Name555', false],
  ['#Name555#', true],
];

test.each(forTest)('check regexp', (obj, expected) => {
  const res = new Validator(obj).valideateUsername();
  expect(res).toBe(expected);
});
