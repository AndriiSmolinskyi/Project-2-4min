const burgerMenu = document.querySelector(".burger");
const navMenu = document.querySelector(".header__nav__list");
const closeBtn = document.querySelector(".close");

function handleResize() {
    if (window.innerWidth > 670) { // Замініть на відповідну ширину вашого `md-ms` брейкпоінта
        navMenu.style.display = "flex";
        burgerMenu.style.display = "none";
        closeBtn.style.display = "none";
    } else {
        navMenu.style.display = "none";
        burgerMenu.style.display = "inline-block";
        closeBtn.style.display = "none";
    }
}

burgerMenu.addEventListener("click", () => {
    navMenu.style.display = "flex";
    burgerMenu.style.display = "none";
    closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
    navMenu.style.display = "none";
    burgerMenu.style.display = "inline-block";
    closeBtn.style.display = "none";
});

window.addEventListener("resize", handleResize);

handleResize();


//slider1

const back = document.querySelector(".btn__back")
const next = document.querySelector(".btn__next")
const firstBg = document.querySelector(".first__bg")

const images = [
    '/img/slider1/1.jpg',
    '/img/slider1/2.jpg',
    '/img/slider1/3.jpg'
]

let currentIndex = 0;

const updateBackground = () =>{
    firstBg.style.backgroundImage = `url(${images[currentIndex]})`
}

const backClick = ()=> {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    updateBackground()
}

const nextClick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
};

updateBackground()

back.addEventListener('click', backClick)
next.addEventListener('click', nextClick)