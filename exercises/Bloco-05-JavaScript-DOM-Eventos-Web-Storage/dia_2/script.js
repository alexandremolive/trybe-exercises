// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
// Adicione a tag div com a classe main-content como filho da tag body ;
// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada;
// Adicione a classe description nas 3 tags h3 criadas;
// Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let bodyTag = document.body;
let title = document.createElement('h1');
let divMainContent = document.createElement('div');
let divCenterContent = document.createElement('div');
let firstParagraph = document.createElement('p');
let leftContent = document.createElement('div');
let rightContent = document.createElement('div');
let smallImage = document.createElement('img');
let noOrderedList = document.createElement('ul');

bodyTag.appendChild(title);
title.innerHTML = 'Exercício 5.2 - JavaScript DOM';
title.className = 'title';
bodyTag.appendChild(divMainContent).className = 'main-content';
divMainContent.appendChild(divCenterContent).className = 'center-content';
divCenterContent.appendChild(firstParagraph).innerHTML = 'Conhecimento para toda a vida';
divMainContent.appendChild(leftContent).className = 'left-content';
divMainContent.removeChild(leftContent);
divMainContent.style.backgroundColor = 'green';
leftContent.appendChild(smallImage).src = 'https://picsum.photos/200';
smallImage.className = 'small-image';
divMainContent.appendChild(rightContent).className = 'right-content';
rightContent.style.marginRight = 'auto';
rightContent.appendChild(noOrderedList);

let numbers = {
  1: 'um',
  2: 'dois',
  3: 'tres',
  4: 'quatro',
  5: 'cinco',
  6: 'seis',
  7: 'sete',
  8: 'oito',
  9: 'nove',
  10: 'dez',
};
for (let number in numbers) {
  let listNumber = numbers[number];
  let list = document.createElement('li');
  list.innerHTML = listNumber;
  noOrderedList.appendChild(list);
};
for (let index = 0; index < 3; index += 1) {
  let tagsH3 = document.createElement('h3');
  divMainContent.appendChild(tagsH3);
  tagsH3.className = 'description';
};
let numbersToRemove = document.querySelectorAll('li');
for (let index = 0; index < numbersToRemove.length; index += 1) {
  let number = numbersToRemove[index];
  if (number.innerText.includes('nove')) {
    number.remove(number);
  } if (number.innerText.includes('dez')) {
    number.remove(number);
  };
};
