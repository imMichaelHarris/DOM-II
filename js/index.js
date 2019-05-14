// Your code goes here
const funBus = document.querySelector('.logo-heading');
const nav = document.querySelector('.nav');
const navBorder = document.querySelector('.main-navigation');
const navLinks = document.querySelectorAll('nav-links');
const busImage = document.querySelector('.home .intro img');
let lastScrollTop = 0;

funBus.addEventListener('mousemove', () => funBus.style.transform = 'scale(1.2) rotate(-8deg)');
document.addEventListener('keydown', (event) => event.key === 'ArrowLeft' ? nav.style.transform = "translateX(-20px)" : nav.style.transform = "translateX(20px)")
//Scroll
document.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    //console.log(st);
    if (st > lastScrollTop){
       navBorder.style.borderColor = 'black';
    } else {
       navBorder.style.borderColor = 'white';
    }
})
//Drag
navLinks.forEach(element => element.addEventListener('drag', (event) => {
    console.log(event);
}));
//Load
window.addEventListener('load', () => {
    console.log('tyest');
    busImage.style.transform = 'translateY(0)';
})