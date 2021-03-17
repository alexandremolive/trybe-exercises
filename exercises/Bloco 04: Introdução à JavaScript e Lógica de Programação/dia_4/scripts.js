// PRIMEIRO
// let info = {

//         personagem: "Margarida",
//         origem: "Pato Donald",
//         nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",

// };
// console.log('Bem vinda, ' + info.personagem)

// // SEGUNDO
// info.recorrente = 'Sim'
// console.log(info)

// //TERCEIRO
// for (let key in info) {
//     console.log(key)
// }

// //QUARTO
// for (let key in info) {
//     console.log(info[key])
// }

//QUINTO

// info.personagem = 'Margarida e Tio Patinhas'
// info.origem = 'Pato Donald e Christmas on Bear Mountain, Dells Four Color Comics #178'
// info.nota = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas'
// info.recorrente = 'Ambos recorrentes'
// console.table(info)

//FUNÇÕES

//PRIMEIRO
// let checkPalindrome

// function palindrome(wordToCheck) {

//     checkPalindrome = wordToCheck.split('').reverse().join('')

//     if (wordToCheck === checkPalindrome) {
//         return true
//     } else {
//         return false
//     }

// } console.log(palindrome('arara'))

// SEGUNDO

// let biggestNumber = 0
// let index = 0


// function checkNumbers(arrayNumbers) {

//     for (let number in arrayNumbers) {

//         if (biggestNumber < arrayNumbers[number]) {
//             biggestNumber = arrayNumbers[number]
//             index = number
//         }


//     } console.log('O maior índice do Array é: ', index)

//     return checkNumbers

// } checkNumbers([8, 5, 6, 7, 98, 9, 78789, 456, 78, 34, 568, 25, 46])

//TERCEIRO

// let smallestNumber = 0
// let index = 0
// let number = 0

// function checkNumbers(arrayNumbers) {

//     smallestNumber = arrayNumbers[number]

//     for (number in arrayNumbers) {


//         if (smallestNumber > arrayNumbers[number]) {
//             smallestNumber = arrayNumbers[number]
//             index = number
//         }

//     } console.log('O menor índice no Array é: ', index)

//     return checkNumbers

// } checkNumbers([8, 5, 6, 7, 98, 9, 78789, 167, 78, 34, 568,  25, 3, 46])

// QUARTO

// let charactersCount = ''
// function nameCount(namesArray) {

//     for (let name in namesArray) {

//         if (charactersCount.length < namesArray[name].length) {
//             charactersCount = namesArray[name]

//         }

//     } console.log('O nome com maior quantidade de caracteres é: ', charactersCount)
//     return

// }
// nameCount(['Alexandre', 'Juliana', 'carmen sandiego', 'Camila', 'Rodolfo', 'Arnold Schwarzenegger'])

//QUINTO



//EM CONSTRUÇÃO

//SEXTO

// let sum = 0

// function sumNumbers (number) {

//     for (let index = 0; index <= number; index += 1 ){

//         sum = sum + index

//     }   console.log('A soma de todos os números até ' + number + ' é: ' + sum)
//     return sumNumbers
// }sumNumbers(56)

// SÉTIMO

// let fullWord = []
// let endWord = []

// function compareString(stringWord, stringEnd) {

//     fullWord = stringWord.split('')
//     endWord = stringEnd.split('')

//     if ((fullWord[fullWord.length - 1] && fullWord[fullWord.length - 2]) === (endWord[endWord.length - 1] && endWord[endWord.length - 2])) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }

//     return compareString
// }
// compareString('teclado', 'do')

//BONUS

//PRIMEIRO

