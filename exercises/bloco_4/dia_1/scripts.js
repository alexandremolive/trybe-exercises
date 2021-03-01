
let resultado;

// PRIMEIRO 

function calculator(inputA, inputB, operator) {

    if (operator === '+') {
        resultado = inputA + inputB;
        return console.log('O resultado da operação é ', resultado);

    } else if (operator === '-') {
        resultado = inputA - inputB
        return console.log('O resultado da operação é ', resultado);

    } else if (operator === '*') {
        resultado = inputA * inputB;
        return console.log('O resultado da operação é ', resultado);

    } else if (operator === '/') {
        resultado = inputA / inputB;
        return console.log('O resultado da operação é ', resultado);

    } else if (operator === '%') {
        resultado = inputA % inputB;
        return console.log('O resultado da operação é ', resultado);

    } else {
        console.log('Operação não encontrada');
    }


} calculator(12454, 67, '+')

//  SEGUNDO

// if (a > b) {
//     console.log('O maior é', a)
// } else if (b > a) {
//     console.log('O maior é', b)
// } else {
//     console.log('Empate')
// };

// // //  TERCEIRO

// if (a > b && a > c) {
//     console.log('O maior é', a)

// } else if (b > a && b > c) {
//     console.log('O maior é', b)

// } else if (c > a && c > b) {
//     console.log('O maior é', c)
// } else {
//     console.log('Empate')
// };

// // QUARTO

// if (a > 0) {
//     console.log('É positivo')
// } else if (a < 0) {
//     console.log('É negativo')
// } else {
//     console.log('Zero')
// };

// // QUINTO

// if (a + b + c === 180) {
//     console.log(true)

// } else {
//     console.log(false)
// };

// // SEXTO

// let pecaXadrez = 'BisPo';
// let convert = pecaXadrez.toLowerCase()

// switch (convert) {
//     case 'rei':
//         console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez. ')
//         break

//     case 'rainha':
//         console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.')
//         break

//     case 'bispo':
//         console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.')
//         break

//     case 'cavalo':
//         console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.')
//         break

//     case 'torre':
//         console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.')
//         break

//     case 'peão':
//         console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.')
//         break

//     default:
//         console.log('Peça não encontrada')
// };

// // SÉTIMO

// let notaPorcentagem = 78;

// if (notaPorcentagem >= 90 && notaPorcentagem <= 100) {
//     console.log('A')
// }
// else if (notaPorcentagem >= 80 && notaPorcentagem < 90) {
//     console.log('B')

// } else if (notaPorcentagem >= 70 && notaPorcentagem < 80) {
//     console.log('C')

// } else if (notaPorcentagem >= 60 && notaPorcentagem < 70) {
//     console.log('D')

// } else if (notaPorcentagem >= 50 && notaPorcentagem < 60) {
//     console.log('E')

// } else if (notaPorcentagem < 50 && notaPorcentagem > 0) {
//     console.log('F')

// } else {
//     console.log('Nota não encontrada')
// };

// // OITAVO

// let a = 4;
// let b = 8;
// let c = 9;

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//     console.log(true)

// }  else {
//     console.log(false)
// }; 

// // NONO


// if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
//     console.log(true)

// }  else {
//     console.log(false)
// };  

// // DECIMO

// let valorCusto = 30;
// let valorVenda = 40;
// let valorImposto = valorCusto * 0.2;
// let lucro = valorVenda - (valorCusto + valorImposto);
// let lucroTotal = 0;

// if (valorCusto <= 0 || valorVenda <= 0) {
//     console.log('Os valores valorCusto e valorVenda não podem ser menor ou igual a 0')

// } else if (lucroTotal = lucro * 1000) {
//     console.log('O valor de lucro para a venda de 1000 é', lucroTotal)
// };

// // DECIMO PRIMEIRO

// let salarioBruto = 5000;
// let salarioBase = 0
// let aliquotaInss = 0;
// let aliquotaIr = 0;
// let salarioLiquido = 0;

// if (salarioBruto <= 1556.94) {

//     aliquotaInssInss = salarioBruto * 0.08;
//     salarioBase = salarioBruto - aliquotaInss;

// } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {

//     aliquotaInss = salarioBruto * 0.09;
//     salarioBase = salarioBruto - aliquotaInss;

// } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {

//     aliquotaInss = salarioBruto * 0.11;
//     salarioBase = salarioBruto - aliquotaInss;

// } else {
//     aliquotaInss = 570.88
//     salarioBase = salarioBruto - aliquotaInss;

// };
// console.log('De acordo com o salario Bruto, a aliquota do INSS é de', aliquotaInss)
// console.log('Portanto seu salario Base é de', salarioBase)

// if (salarioBase <= 1903.98) {
//     console.log('Você é isento de IR')

// } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
//     aliquotaIr = (salarioBase * 0.075) - 142.80;
//     salarioLiquido = salarioBase - aliquotaIr;

// } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
//     aliquotaIr = (salarioBase * 0.15) - 354.80;
//     salarioLiquido = salarioBase - aliquotaIr;

// } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
//     aliquotaIr = (salarioBase * 0.225) - 636.13;
//     salarioLiquido = salarioBase - aliquotaIr;
// } else {
//     aliquotaIr = (salarioBase * 0.275) - 869.13;
//     salarioLiquido = salarioBase - aliquotaIr
// }
// console.log('Seu salario liquido é de', salarioLiquido)