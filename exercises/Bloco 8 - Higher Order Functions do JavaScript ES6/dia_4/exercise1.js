
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const newArr = arrays.reduce((arr, number) => {
    return arr.concat(number);
  }, []);
  return newArr;
} flatten();
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);