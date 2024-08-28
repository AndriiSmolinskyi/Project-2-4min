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




//slider2

let currentSlide = 0;

const slides = [
    [
        {img: 'img/slider2/slider2_1/first1.png', title: 'Wildstone Infra Hotel', text: '2715 Ash Dr. San Jose, South Dakota'},
        {img: 'img/slider2/slider2_1/first2.png', title: 'Wish Stone Building', text: '2972 Westheimer Rd. Santa Ana, Illinois'},
        {img: 'img/slider2/slider2_1/first3.png', title: 'Mr. Parkinston’s House', text: '3517 W. Gray St. Utica, Pennsylvania'},
        {img: 'img/slider2/slider2_1/first4.png', title: 'Oregano Height', text: '2464 Royal Ln. Mesa, New Jersey'},
    ],
    [
        {img: 'img/slider2/slider2_2/second1.jpg', title: 'Hi tech house', text: '24020 Royal Ln. Mesa, New Jersey'},
        {img: 'img/slider2/slider2_2/second2.jpg', title: 'Hi tech design', text: '2972 San-Franciso Rd. Santa, Califronia'},
        {img: 'img/slider2/slider2_2/second3.jpg', title: 'New era house', text: '2072 Los Angeles Rd. Santa, Califronia'},
        {img: 'img/slider2/slider2_2/second4.webp', title: 'Rich big house', text: '2072 Dallas Rd. Santa Ana, Texas'},
    ]
]

function showSlide(index){
    const slideItems = document.querySelectorAll('.six__right__up__item')
    slides[index].forEach((slide, i) =>{
        slideItems[i].querySelector('img').src = slide.img
        slideItems[i].querySelector('.six__right__up__item__text__title').textContent = slide.title
        slideItems[i].querySelector('.six__right__up__item__text__par').textContent = slide.text
    })
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide(){
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide)

const slide2Back = document.querySelector('.slide2__back')
const slide2Next = document.querySelector('.slide2__next')

slide2Back.addEventListener('click', prevSlide)
slide2Next.addEventListener('click', nextSlide)

