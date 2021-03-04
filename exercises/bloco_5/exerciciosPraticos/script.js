let container = document.getElementById('container');
container.style.backgroundColor = 'black';

let header = document.getElementById('header-container');
header.style.backgroundColor = '#00B712';


let emergency = document.querySelector('.emergency-tasks');
emergency.style.backgroundColor = '#6B0F1A';

let titleEmergency = document.querySelectorAll('.emergency-tasks h3 ');
for (let index = 0; index < titleEmergency.length; index += 1) {
  titleEmergency[index].style.backgroundColor = 'black'
};

let noEmergency = document.querySelector('.no-emergency-tasks');
noEmergency.style.backgroundColor = '#EC9F05';

let titleNoEmergency = document.querySelectorAll('.no-emergency-tasks h3 ');
for (let index = 0; index < titleEmergency.length; index += 1) {
  titleNoEmergency[index].style.backgroundColor = 'black'
};

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#00B712';