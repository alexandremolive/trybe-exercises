const userState = document.querySelector('#user-state')
let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraiba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
const submitBtn = document.querySelector('#submit')
const body = document.querySelector('body')
const clear = document.querySelectorAll('input')
const clearBtn = document.querySelector('#clear')

function createStateList() {
  states.forEach((state) => {
    const selectState = document.createElement('option');
    selectState.innerText = state;
    selectState.value = state
    userState.appendChild(selectState);
  })
} createStateList();

submitBtn.addEventListener('click', submit)
clearBtn.addEventListener('click', clear)


function submit(event) {
  event.preventDefault()
  console.log(event)
  let userData = event.target.formAction
  const divContent = document.createElement('div')
  divContent.innerText = userData
  body.appendChild(divContent)
}



