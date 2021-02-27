let sum = 0;
let arithmetic = 0;
let biggestNumber = 0;
let odd = 0;
let notOdd = 0;
let smallestNumber = 0;
let compareNumber = 0;
let createArray = [];
let createArrayDivided = [];
let numbersTime = [];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício 1

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
};

// // exercício 2

for (let index = 0; index < numbers.length; index += 1) {

    sum += numbers[index];

};
console.log('A soma de todo o Array é:', sum);

// // exercício 3

for (let index = 0; index < numbers.length; index += 1) {

    sum += numbers[index];

};
arithmetic = sum / numbers.length;

console.log('A média aritmética deste Array é:', arithmetic);

// // // exercício 4

if (arithmetic > 20) {
    console.log('O valor: ' + (arithmetic) + ' é maior que 20');
} else {
    console.log('O valor: ' + (arithmetic) + ' é menor ou igual a 20');
}

// // exercício 5

for (let index = 0; index < numbers.length; index += 1) {


    if (biggestNumber < numbers[index]) {
        biggestNumber = numbers[index]
    };

};
console.log('O maior número do Array é:', biggestNumber);

// // exercício 6

for (let index = 0; index < numbers.length; index += 1) {

    if (numbers[index] % 2 != 0) {
        odd += 1;
    };
};
if (odd === 0) {
    console.log('Nenhum valor impar encontrado');
} else {
    console.log('A Quantidade de números impares é:', odd);
};

// // exercício 7


for (let index = 0; index < numbers.length; index += 1) {

    compareNumber = numbers[index];

    for (let compareIndex = 0; compareIndex < numbers.length; compareIndex += 1) {

        if (compareNumber > numbers[compareIndex]) {

            smallestNumber = numbers[compareIndex];

        }
    };
}; console.log('O menor número do Array é', smallestNumber);

// // exercício 8


for (let index = 1; index <= 25; index += 1) {

    createArray.push(index);

    console.log(createArray)

}
// // exercício 9

for (let dividedIndex = 0; dividedIndex < createArray.length; dividedIndex += 1) {

    createArrayDivided = createArray[dividedIndex] / 2;
    console.log(createArrayDivided);

};

// BONUS 1

for (let index = 1; index < numbers.length; index += 1) {


    for (let compareIndex = 0; compareIndex < index; compareIndex += 1) {

        if (numbers[index] < numbers[compareIndex]) {

            let orderedArray = numbers[index];

            numbers[index] = numbers[compareIndex];

            numbers[compareIndex] = orderedArray;
            console.log('ordenado', numbers);

        };
    };
};

//BONUS 3

for (let index = 0; index < numbers.length; index += 1) {


    for (let compareIndex = 1; compareIndex < numbers.length; compareIndex += 1) {

        numbersTime.push(numbers[index] * numbers[compareIndex]);

        numbers[index += 1];
        if (numbers[index] === numbers[numbers.length - 1]) {
            numbersTime.push((numbers[numbers.length - 1]) * 2);
        };
    };

}; console.log(numbersTime)
