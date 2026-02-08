// LIGHTBOX
const images = document.querySelectorAll('.slide img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

images.forEach(img=>{
    img.addEventListener('click', ()=>{
        lightbox.style.display='flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

closeBtn.addEventListener('click', ()=> lightbox.style.display='none');
lightbox.addEventListener('click', e=>{
    if(e.target === lightbox) lightbox.style.display='none';
});

// SLIDER
const slider = document.getElementById('slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', ()=> slider.scrollBy({ left: 260, behavior:'smooth' }));
prevBtn.addEventListener('click', ()=> slider.scrollBy({ left: -260, behavior:'smooth' }));

