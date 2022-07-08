let offset = 0;
let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
let navLinkF = document.querySelector('nav__link__1');
let navLinkS = document.querySelector('nav__link__2');
let navLinkT = document.querySelector('nav__link__3');
const sliderLine = document.querySelector('.viewport');

document.querySelector('.button_1').addEventListener('click', function () {
    offset = offset + 100;


    if (offset > 200) {
        offset = 200;
    }
    sliderLine.style.transform = `translateX(${-offset}vw)`;
});

document.querySelector('.button_2').addEventListener('click', function () {
    offset = offset - 100;

    if (offset < 0) {
        offset = 0;
    }
    sliderLine.style.transform = `translateX(${-offset}vw)`;
});

document.querySelector('.nav__link__1').addEventListener('click', function () {
    offset = 0;
    sliderLine.style.transform = `translateX(${-offset}vw)`;
});
document.querySelector('.nav__link__2').addEventListener('click', function () {
    offset = 100;
    sliderLine.style.transform = `translateX(${-offset}vw)`;
});
document.querySelector('.nav__link__3').addEventListener('click', function () {
    offset = 200;
    sliderLine.style.transform = `translateX(${-offset}vw)`;
});

document.addEventListener('click', function () {
    if (offset == 0) {

        leftButton.textContent = '';
        rightButton.textContent = 'ROLLS';
    } else if (offset == 100) {

        leftButton.textContent = 'SUSHI';
        rightButton.textContent = 'SETS';

    } else {
        leftButton.textContent = 'ROLLS';
        rightButton.textContent = '';
    }
});

const openOrderWindow = document.getElementById('open__window');
const closeOrderWindow = document.getElementById('close__window');
const orderWindow = document.getElementById('order__window');
const orderButton = document.getElementById('order__call');

openOrderWindow.addEventListener('click', function (e) {
    e.preventDefault();
    orderWindow.classList.add('open');
})
closeOrderWindow.addEventListener('click', () => {
    orderWindow.classList.remove('open');
})





let contentSlider = new Swiper('.content', {
    wrapperClass: "container__wrapper",
    slideClass: "container__screen",
    direction: 'vertical',
    slidesPerView: '1',
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensetivity: 1,
    },
    allowTouchMove: true,
    watchOverflow: true,
    speed: 1200,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
})

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);