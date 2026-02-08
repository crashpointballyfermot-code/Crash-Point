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
window.onload = function() {
    const slider = document.getElementById('slider');
    
    if (!slider) {
        console.error("Nie znaleziono elementu o id 'slider'!");
        return;
    }

    const scrollAmount = 315; // Szerokość zdjęcia (300px) + gap (15px)

    function autoScroll() {
        // Sprawdzamy czy doszliśmy do końca
        if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 10)) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    // Start co 5 sekund
    let timer = setInterval(autoScroll, 5000);

    // Zatrzymywanie po najechaniu myszką
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => timer = setInterval(autoScroll, 5000));
};

