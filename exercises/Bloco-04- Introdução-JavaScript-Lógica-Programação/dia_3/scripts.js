//primeiro

let numberToDraw = 3;
let arrayDrawn = ''
let symbol = '*'

for (let index = 0; index < numberToDraw; index += 1) {
    arrayDrawn = arrayDrawn + symbol

}

for (let index = 0; index < numberToDraw; index += 1) {


    console.log(arrayDrawn)
}

// segundo

let numberToDraw = 5;
let arrayDrawn = ''
let symbol = '*'

for (let index = 0; index < numberToDraw; index += 1) {
    arrayDrawn = arrayDrawn + symbol
    console.log(arrayDrawn)
}

//terceiro

let numberToDraw = 5;
let symbol = '*'
let draw = 0

for (let index = 1; index <= numberToDraw; index += 1) {

    draw = ' '.repeat(numberToDraw - index) + symbol.repeat(index)
    console.log(draw)
}

// quarto

let numberToDraw = 9;
let symbol = '*'
let draw = 0
let counter = 0

for (let index = 0; index <= numberToDraw; index += 1) {

    counter = numberToDraw - index;

    draw = ' '.repeat(counter) + symbol.repeat(index) + symbol.repeat(index + 1);

    console.log(draw);
    if (counter === index + 1) {

        break;
    };
};

//Quinto

let numberToDraw = 5;
let symbol = '*'
let draw = 0
let leftSymbol = 0
let = rightSymbol = 0

for (let index = 0; index <= numberToDraw; index += 1) {

    leftSymbol = numberToDraw - index;
    rightSymbol = index + 1


    draw = ' '.repeat(leftSymbol) + symbol.repeat(index) + symbol.repeat(rightSymbol);
    console.log(draw);


    if (leftSymbol === rightSymbol) {

        break;
    };
};

//BOnus

//sexto

let = isItPrime = 100;
let = primeNumbers = [];
let = notPrime = [];

for (let index = 2; index <= isItPrime; index += 1) {

    if (index === 2 || index === 3 || index === 5 || index === 7) {
        primeNumbers.push(index)
    } else if (index % 2 === 0) {
        notPrime.push(index)
    } else if (index % 3 === 0) {
        notPrime.push(index)
    } else if (index % 5 === 0) {
        notPrime.push(index)
    } else if (index % 7 === 0) {
        notPrime.push(index)
    }
    else {
        primeNumbers.push(index)
    };
    console.log('Números primos', primeNumbers)
    console.log('Números não primos', notPrime)
};

