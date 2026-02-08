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

// Funkcja przewijająca
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
let index = 0;
const totalSlides = slides.length;

// Funkcja do pokazywania następnego slajdu
function showSlide(i) {
  if(i < 0) index = totalSlides - 1;
  else if(i >= totalSlides) index = 0;
  else index = i;

  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Automatyczne przewijanie co 5 sekund
setInterval(() => {
  showSlide(index + 1);
}, 5000);

// Obsługa przycisków
function scrollSlider(direction) {
  showSlide(index + direction);
}

};


