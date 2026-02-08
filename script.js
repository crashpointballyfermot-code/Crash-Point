// LIGHTBOX FUNCTIONALITY
const images = document.querySelectorAll('.slide img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});

// SLIDER FUNCTIONALITY
const slider = document.getElementById('slider');
const scrollAmount = 320; // Szerokość zdjęcia + przerwa

// Funkcja przewijająca
function autoScroll() {
    // Sprawdź, czy dojechaliśmy do końca
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        // Jeśli tak, wróć na początek
        slider.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        // Jeśli nie, przesuń o jedno zdjęcie
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Uruchom przewijanie co 5000ms (5 sekund)
let sliderInterval = setInterval(autoScroll, 5000);

// Opcjonalnie: Zatrzymaj przewijanie, gdy myszka jest nad sliderem
slider.addEventListener('mouseenter', () => {
    clearInterval(sliderInterval);
});

// Opcjonalnie: Wznów przewijanie, gdy myszka zjedzie ze slidera
slider.addEventListener('mouseleave', () => {
    sliderInterval = setInterval(autoScroll, 5000);
});

// Funkcja dla przycisków (jeśli ich używasz)
function scrollSlider(direction) {
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
