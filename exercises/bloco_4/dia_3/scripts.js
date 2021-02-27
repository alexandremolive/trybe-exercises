//primeiro

// let numberToDraw = 3;
// let arrayDrawn = ''
// let symbol = '*'

// for (let index = 0; index < numberToDraw; index += 1) {
//     arrayDrawn = arrayDrawn + symbol

// }    

// for (let index = 0; index < numberToDraw; index += 1) {


//     console.log(arrayDrawn)
// }

// segundo

// let numberToDraw = 5;
// let arrayDrawn = ''
// let symbol = '*'

// for (let index = 0; index < numberToDraw; index += 1) {
//     arrayDrawn = arrayDrawn + symbol
//     console.log(arrayDrawn)
// }

//terceiro

let numberToDraw = 5;
let arrayDrawn = ''
let symbol = '*'

for (let index = 0; index < numberToDraw; index += 1) {
    arrayDrawn = ' '

    for (let secondIndex = 0; secondIndex < numberToDraw - (index + 1); secondIndex += 1) {

        arrayDrawn = arrayDrawn + ' '
    }  

    for (let index = 0; index < numberToDraw; index += 1) {
        arrayDrawn = arrayDrawn + symbol
        
        
       

    } console.log(arrayDrawn)

}  