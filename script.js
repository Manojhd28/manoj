// script.js
const header =  document.querySelector('header');
header.addEventListener('mouseover', () => {
    header.style.backgroundColor = 'lightblue';
});
header.addEventListener('mouseout', () => {
    header.style.backgroundColor = 'white';
});