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
function createDaysOfTheMonth() {
  let dezDaysList = ['', 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysList = document.querySelector('#days');
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
function createButtonHoliday() {
  let buttonsContainer = document.querySelector('.buttons-container');
  let buttonHoliday = document.createElement('button');
  buttonHoliday.innerHTML = 'Feriados';
  buttonsContainer.appendChild(buttonHoliday);
  buttonHoliday.setAttribute('id', 'btn-holiday');
} createButtonHoliday()


