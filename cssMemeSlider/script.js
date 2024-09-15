const sliderImages = document.querySelectorAll('.slider_pic');
const sliderZone = document.querySelector('.pictures_slider');
const sliderDots = document.querySelectorAll('.slider_dot');
const sliderPhrase = document.querySelector('.phrase');

let sliderCount = 0;
let sliderWidth = document.querySelector('.slider-wrapper');

function showSlider() {
    sliderWidth = document.querySelector('.slider-wrapper').offsetWidth;
    sliderZone.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlider();
};
showSlider();

function nextSlide () {
    sliderCount++;
    if(sliderCount >= sliderImages.length) sliderCount = 0;
    rollSlider();
    thisSlider(sliderCount);
};

function prevSlide () {
    sliderCount--;
    if(sliderCount < 0) sliderCount = sliderImages.length - 1;
    rollSlider();
    thisSlider(sliderCount);
};

function rollSlider () {
    sliderZone.style.transform = `translateX(${-sliderCount*sliderWidth}px)`;
}
function thisSlider (index) {
    sliderDots.forEach(item => item.classList.remove('active_dot'));
    sliderDots[index].classList.add('active_dot');

}
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlider(sliderCount);
    })
    
});