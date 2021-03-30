// const dataEmployees = (employee) => (
//   {
//     nomeCompleto: `${employee}`,
//     email: `${employee.replace(' ', '_')}@trybe.com`,

//   })

// const newEmployees = () => {
//   const employees = {
//     id1: dataEmployees('Pedro Guerra'),
//     id2: dataEmployees('Luiza Drummond'),
//     id3: dataEmployees('Carla Paiva'),
//   }
//   return employees;
// };
// console.log(newEmployees())

// const generateNumber = () => {
//   let number = Math.floor(Math.random() * 5)
//   return number
// }

// const checkBet = (bet) => {
//   let numberSort = generateNumber()
//   if (numberSort === bet) {
//     console.log('Parabéns!!!')
//   } else {
//     console.log('Tente novamente')
//   }
// }
// checkBet(3)

// const checkAnswer = (answer) => {
//   return (correctAnswer) => {
//     if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
//       return true
//     } else {
//       return false
//     }
//   }
// }
// console.log(checkAnswer('higher order function')('HIGHER ORDER FUNCTION'))

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = () => {
  let damage = Math.floor(Math.random() * (dragon.strength - 15)) + 15
  return console.log(damage)
}

const damageWarrior = () => {
  let damage = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength)) + warrior.strength
  return console.log(damage)

}

const damageMage = () => {
  let damage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence
  let mageMana = mage.mana -= 15
  console.log(mageMana)
  return console.log(damage)
}

damageMage()
