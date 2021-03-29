// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(10, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0 && number > 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(10, isEven); // Testa quais números serão pares;
// repeat(10, isOdd); // Testa quais números serão ímpares;

// const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;

// const greaterThan10 = greaterThan(10);
// console.log(greaterThan(10)(15));
// // true

const wakeUp = () => console.log('Acordando!!')
const coffee = () => console.log('Bora tomar café')
const sleep = () => console.log('Partiu dormir')

const doingThings = (thing) => {
  `${thing()}`
}
doingThings(sleep)