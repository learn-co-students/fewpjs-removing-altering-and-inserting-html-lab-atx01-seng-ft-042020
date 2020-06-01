// Write your code here!

document.getElementById('main').remove();



let newHeader = document.createElement('h1');

newHeader.id = 'victory';

document.body.appendChild(newHeader);
newHeader.innerHTML = 'Marshall is the champion';