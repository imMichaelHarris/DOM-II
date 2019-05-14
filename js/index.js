// Your code goes here
const funBus = document.querySelector('.logo-heading');
const nav = document.querySelector('.nav');
const navBorder = document.querySelector('.main-navigation');
let lastScrollTop = 0;

funBus.addEventListener('mousemove', () => funBus.style.transform = 'scale(1.2) rotate(-8deg)');
document.addEventListener('keydown', (event) => event.key === 'ArrowLeft' ? nav.style.transform = "translateX(-20px)" : nav.style.transform = "translateX(20px)")
//Scroll
document.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    console.log(st);
    if (st > lastScrollTop){
       navBorder.style.borderColor = 'black';
    } else {
       navBorder.style.borderColor = 'white';
    }
})