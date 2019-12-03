// Your code goes here
// mouseover 
const topImg = document.querySelector('img');

topImg.addEventListener('mouseenter', () => {
    topImg.style.transform = 'scale(1.2)';
    topImg.style.transition = 'transform 0.3s';
})

// mouseleave
topImg.addEventListener('mouseleave', () => {
    topImg.style.transform = 'scale(1)';
})

// click
const navLinks = document.querySelectorAll('a.nav-link');

document.querySelectorAll('a.nav-link').forEach(el => {
    el.addEventListener('click', () => {
        el.style.color = 'orange';
    })
})

// double click
const newImg = document.querySelector('.home .content-section .img-content img');
// const oldImg = document.querySelector('newImg');

newImg.addEventListener('dblclick', () => {
    newImg.src='img/desertbus.jpg';
})
// oldImg.addEventListener('dblclick', () => {
//     oldImg.src='img/adventure.jpg';
// })

// mouse down/mouse up
function mouseDown() {
    document.querySelector('h1').innerHTML = "You're holding me down!";
}

function mouseUp() {
    document.querySelector('h1').innerHTML = "Fun Bus";
}

document.querySelector('h1').addEventListener('mousedown',() => mouseDown());
document.querySelector('h1').addEventListener('mouseup', () => mouseUp());

// //change to dark mode with keydown
document.addEventListener('keydown', (event) => {
    if (background.style.backgroundColor != 'black'){
        background.style.backgroundColor = 'black';
        background.style.color = 'white';
    }
})

// change back to light mode with keypress
document.addEventListener('keypress', (event) => {
    if (background.style.backgroundColor != 'white') {
        background.style.backgroundColor = 'white';
        background.style.color = 'black';
    }
})



// const background = document.querySelector('*');
// document.addEventListener('keydown', (event) => {
//     if(background.style.backgroundColor != 'black'){
//         background.style.backgroundColor = 'black';
//         background.style.color = 'whitesmoke';
//     }
// })
// ​
// document.addEventListener('keypress', (event) => {
//     if(background.style.backgroundColor != 'white'){
//         background.style.backgroundColor = 'white';
//         background.style.color = 'black';
//     }
// })







// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`
