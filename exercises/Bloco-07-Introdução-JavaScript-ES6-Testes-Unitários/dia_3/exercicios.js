const assert = require('assert'); // Sintaxe para incluir o módulo assert

// assert.strictEqual(50, 50); // Sem erros: 50 == 50
// assert.strictEqual(50, 70); // AssertionError: 50 == 70


// function division(x, y) {
//   return x / y;
// }

// const expected = division(9, 3);

// assert.equal(expected, '3', 'Deu ruim');


// const list1 = [1, 2, 3, 4, 5];
// const list2 = [1, 2, 3, 4, 5];

// assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

// const person1 = { name: 'john', age: 21 };
// const person2 = { name: 'john', age: 21 };

// assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

// const person3 = { name: 'john', age: 21 };

// assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');


// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// const expected = sum(4,'5')
// assert.strictEqual(expected, 0, 'Deu ruim')


// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return assert.notDeepStrictEqual(newArr, [1,2,3,4], 'erro')

 
  
// } 
// myRemove([1, 2, 3, 4], 3)

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj2, obj3, '2 e 3 não idênticos')

