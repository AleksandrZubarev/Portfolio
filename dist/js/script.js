const hamburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});      
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});   


const counter = document.querySelectorAll('.skills__protsent-num');
const lines = document.querySelectorAll('.skills__protsent-div1');

counter.forEach((item, i) => {
     lines[i].style.width = item.innerHTML;
});
