let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000); 


document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navList = document.getElementById("nav-list");

    menuBtn.addEventListener("click", () => {
        navList.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
});