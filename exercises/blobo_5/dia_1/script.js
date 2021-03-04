
// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//   - document.getElementById()
//   - document.getElementsByClassName()
//   - document.getElementsByTagName()
// Crie uma função que mude o texto na tag < p > para uma descrição de como você se vê daqui a 2 anos. 
// (Não gaste tempo pensando no texto e sim realizando o exercício)
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe(rgb(76, 164, 109)).
// Crie uma função que mude a cor do quadrado vermelho para branco.
// Crie uma função que corrija o texto da tag<h1>.
// Crie uma função que modifique todo o texto da tag < p > para maiúsculo.
// Crie uma função que exiba o conteúdo de todas as tags<p> no console.
let paragraphs = document.getElementsByTagName('p');
let mainContents = document.getElementsByClassName('main-content')[0];
let centerContent = document.getElementsByClassName('center-content')[0];
let title = document.getElementsByClassName('title')[0];

function changeParagraph(paragraph, messenger) {
  if (paragraph === 0) {
    paragraphs[0].innerText = messenger;
  } else if (paragraph === 1) {
    paragraphs[1].innerText = messenger;
  } else if (paragraph === 2) {
    paragraphs[2].innerText = messenger;
  }
} 
function changeColorMain(color) {
  mainContents.style.backgroundColor = color;
} 
function changeColorCenter(color) {
  centerContent.style.backgroundColor = color;
} 
function changeTitle(titleToChange) {
  title.innerText = titleToChange;
} 
function changeToUppercase(paragraphOption, option) {
  if (paragraphOption === 0 && option === true) {
    paragraphs[0].style.textTransform = 'uppercase'
  } else if (paragraphOption === 1 && option === true) {
    paragraphs[1].style.textTransform = 'uppercase'
  } else if (paragraphOption === 2 && option === true) {
    paragraphs[2].style.textTransform = 'uppercase'
  }
} 
function printConsole() {
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index]);
  }
} 

changeParagraph(1, 'A Evolução que começou lá atrás, só cresce!');
changeColorMain('rgb(76, 164, 109)');
changeColorCenter('white');
changeTitle('Exercício 5.1 JavaScript');
changeToUppercase(1, true);
printConsole();