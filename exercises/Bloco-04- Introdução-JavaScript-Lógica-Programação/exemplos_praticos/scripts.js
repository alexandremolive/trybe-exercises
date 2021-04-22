// DIA 1

// let nota = 150;
// let resultado;

// if (nota >= 80 && nota <= 100) {
//     resultado = 'Aprovada'
// }
// else if (nota >= 60 && nota < 80) {
//     resultado = 'Lista'
// }
// else if (nota < 60) {
//     resultado = 'Reprovado'
// };

// switch (resultado) {
//     case 'Aprovada':
//         console.log('Parabéns, você foi aprovado(a)!');
//         break;

//     case 'Lista':
//         console.log('Você está na lista de espera');
//         break;

//     case 'Reprovado':
//         console.log('Você foi reprovado(a)');
//         break;

//     default:
//         console.log('Nota não localizada');
// };

// DIA 2

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push('Contato')

// console.log(menu);

// let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

// for(let i = 0; i < groceryList.length; i++) {
//     console.log(groceryList[i])
// }


//Bloco 4.4


let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem ' + player.age + ' ' + 'anos de idade')

console.table(player)

console.log('A jogadora ' + player.name + ' ' + player.lastName + 
' foi eleita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes ')

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' 
+ player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata ')