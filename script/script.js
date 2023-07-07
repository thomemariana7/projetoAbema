


const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = Array.from(carouselInner.querySelectorAll('.carousel-item'));
const indicators = Array.from(document.querySelectorAll('.carousel-indicator'));
let currentIndex = 0;
const totalItems = carouselItems.length;




function goToItem(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    indicators[currentIndex].classList.remove('active');
    indicators[index].classList.add('active');
    
    currentIndex = index;
}

setInterval(() => {
    let nextIndex = (currentIndex + 1) % totalItems;
    goToItem(nextIndex);
}, 4000);






const galeria = document.getElementById("galeria")
const galerias = document.querySelectorAll('#galeria div')

const next = document.getElementById('next')
const back = document.getElementById('back')

let index = 0

next.addEventListener('click', () => {
    index++
    if(index > galerias.length - 1) index = 0;
    galeria.style.transform = `translate3d(${-index * 196}px, 0px, 0px)`
})

back.addEventListener('click', () => {
    index--
    if(index < 0) index = 3
    galeria.style.transform = `translate3d(${-index * 196}px, 0px, 0px)`
})









