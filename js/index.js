// Your code goes here
const funBus = document.querySelector('.logo-heading');
const nav = document.querySelector('.nav');
const navBorder = document.querySelector('.main-navigation');
const navLinks = document.querySelectorAll('.nav-link');
const busImage = document.querySelector('.home .intro img');
const buttons = document.querySelectorAll('.btn');
const h2 = document.querySelectorAll('h2');
const allImages = document.querySelectorAll('img');
let lastScrollTop = 0;
let startWidth = 0;

funBus.addEventListener('mousemove', () => funBus.style.transform = 'scale(1.2) rotate(-8deg)');

document.addEventListener('keydown', (event) => event.key === 'ArrowLeft' ? nav.style.transform = "translateX(-20px)" : nav.style.transform = "translateX(20px)")

//Scroll
document.addEventListener('scroll', (event) => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    //console.log(st);
    if (st > lastScrollTop){
       navBorder.style.borderColor = 'black';
    } else {
       navBorder.style.borderColor = 'white';
    }
})

//wheel
window.addEventListener('wheel', (event) => {
    console.log(event);
    console.log(window.pageYOffset);
    if(window.pageYOffset > 500){
        funBus.style.fontSize = '4rem';

    } else {
        funBus.style.fontSize = `${window.pageYOffset / 4}px`;
    }
})

//prevent default
navLinks.forEach(element => element.addEventListener('click', (event) => {
    event.preventDefault();
}));

//Load
window.addEventListener('load', () => {
    busImage.style.transform = 'translateY(0)';
});

//Focus
buttons.forEach(element => element.addEventListener('focus', (event) => {
    console.log(event)
}))

//resize
window.addEventListener('resize', (event) => {
    const newWidth = event.target.innerWidth;
    if(newWidth > startWidth){
        funBus.textContent = 'Fun Bus is now bigger!!'
        startWidth = newWidth;
    } else {
        funBus.textContent = 'Fun Bus is now smaller'
        startWidth = newWidth;
    }
})

//Double click
h2.forEach(element => element.addEventListener('dblclick', () => {
    element.style.color = 'red';
    element.style.fontWeight = '700';
}))

//Drag 
allImages.forEach(img => img.addEventListener('drag', () => {
    img.style.border = '5px solid black';
}))
allImages.forEach(img => img.addEventListener('dragend', () => {
    img.style.border = 'none';
}))

//stop 
allImages.forEach(img => img.addEventListener('mouseenter', () => {
    console.log('enter');
}))

//transition end
busImage.addEventListener('transitionend', () => {
    navLinks.style.color = 'red';
})
