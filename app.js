let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function() {
    showSlider('next');
};
prevButton.onclick = function() {
    showSlider('prev');
};

let unAcceptClick;

const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
};

seeMoreButtons.forEach((button) => {
    button.onclick = function() {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
        //  The  slide Stops when SeeMore is clicked
        clearInterval(autoSlideInterval);
    };
});

backButton.onclick = function() {
    carousel.classList.remove('showDetail');
    // Resume the slide when the back button is clicked
    startAutoSlide();
};

let autoSlideInterval;

const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        showSlider('next');
    }, 30000);
};

// Start auto slide initially
startAutoSlide();
