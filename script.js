// ================= FORMULARZ =================
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for contacting Crash Point! We'll get back to you soon.");
    form.reset();
});

// ================= HAMBURGER MENU =================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// ================= LIGHTBOX =================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Wybieramy wszystkie zdjęcia w sekcjach Services i About
const images = document.querySelectorAll('.service-img, .about-img');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

// Zamknięcie lightbox po kliknięciu X
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Zamknięcie lightbox po kliknięciu poza obraz
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
