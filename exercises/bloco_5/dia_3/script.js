function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();
// Escreva seu código abaixo.
let dezDaysList = ['', 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let daysList = document.querySelector('#days');

function createDaysOfTheMonth() {


  for (let index = 0; index < dezDaysList.length; index += 1) {
    let daysOfTheMonth = dezDaysList[index];
    let dayMonthListItem = document.createElement('li');
    dayMonthListItem.innerHTML = daysOfTheMonth;
    daysList.appendChild(dayMonthListItem);
    dayMonthListItem.className = 'day';
    if (daysOfTheMonth === 24 | daysOfTheMonth === 25 | daysOfTheMonth === 31) {
      dayMonthListItem.className = 'day holiday';
    } else if (daysOfTheMonth === 4 | daysOfTheMonth === 11 | daysOfTheMonth === 18 | daysOfTheMonth === 25) {
      dayMonthListItem.className = 'day friday';
    }
  }
}
createDaysOfTheMonth()

let buttonsContainer = document.querySelector('.buttons-container');
let buttonHoliday = document.createElement('button');
let buttonFriday = document.createElement('button')
let holidayDays = document.querySelectorAll('.holiday')
let fridayDays = document.querySelectorAll('.friday')




function createButtonHoliday() {
  buttonHoliday.innerHTML = 'Feriados';
  buttonsContainer.appendChild(buttonHoliday);
  buttonHoliday.setAttribute('id', 'btn-holiday');
} createButtonHoliday()

let holidayColor = 'white';
let defaultColor = 'rgb(238,238,238)'
buttonHoliday.addEventListener('click', function () {
  for (let index = 0; index < holidayDays.length; index += 1) {
    if (holidayDays[index].style.backgroundColor === holidayColor) {
      holidayDays[index].style.backgroundColor = defaultColor
    } else {
      holidayDays[index].style.backgroundColor = holidayColor
    }
  }
})

function createButtonFriday() {

  buttonFriday.innerHTML = 'Sexta-Feira';
  buttonsContainer.appendChild(buttonFriday);
  buttonFriday.setAttribute('id', 'btn-friday');
} createButtonFriday()

let fridayText = 'FRIDAY BABY'

buttonFriday.addEventListener('click', function () {
  for (let index = 0; index < fridayDays.length; index += 1) {

    if (fridayDays[index].innerHTML !== fridayText) {
      fridayDays[index].innerHTML = fridayText
    } else {
      fridayDays[index].innerHTML = fridayDays
    }
  }
})

daysList.addEventListener('mouseover', function (event) {
  event.target.style.fontSize = '32px';
  event.target.style.transition = 'all ease 0.5s';


})
daysList.addEventListener('mouseout', function (event) {
  event.target.style.fontSize = '20px';
  event.target.style.transition = 'all ease 0.5s';

})

function createTask() {
  let myTasks = document.getElementsByClassName('my-tasks')
  let taskDay = document.createElement('span');
  for (index = 0; index < myTasks.length; index += 1) {
    myTasks[index].appendChild(taskDay);
    taskDay.innerHTML = 'Estudar';
  }
} createTask()





