const dimensiSlide = document.querySelector('.group-slide');
const dimensiImage = document.querySelectorAll('.group-slide');

const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');

let counter = 1;
const size = dimensiImage[0].clientWidth + dimensiImage[1].clientWidth;

dimensiSlide.style.transform = 'translateX(' +  (-size * counter) + 'px)';

btnNext.addEventListener('click', ()=>{
    dimensiSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
})