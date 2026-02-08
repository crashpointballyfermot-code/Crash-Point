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

// SLIDER AUTOMATYCZNY
const slider = document.getElementById('slider');
const slides = Array.from(document.querySelectorAll('.slide'));
const slideWidth = slides[0].offsetWidth + 10; // szerokość + margin
let index = 0;

// Duplikujemy slajdy dla płynnego loopa
slider.innerHTML += slider.innerHTML;

// Funkcja przesuwająca slider
function moveSlider() {
    index++;
    slider.style.transition = 'transform 1s ease';
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    if(index >= slides.length) {
        // resetujemy po zakończeniu pętli
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            index = 0;
        }, 1000);
    }
}

// Automatyczne przewijanie co 5 sekund
setInterval(moveSlider, 5000);
