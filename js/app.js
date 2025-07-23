const body = document.getElementById('body');
const playBtn = document.getElementById('playBtn');
const bannerVideoContent = document.querySelector('.video-container');
const bannerVideo = document.querySelector('.banner-video');
const bannerContent = document.querySelector('.banner-content');
const openMenu = document.getElementById('openNav');
const closeMenu = document.getElementById('closeNav');
const navMenu = document.querySelector('.navigation');
const nav = document.getElementById('nav');
const sliderContainer = document.querySelectorAll('.testi-container');

//TABS CONST
const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.tabTarget);
        tabsContent.forEach(content => {
            content.classList.remove('active');
        })
        target.classList.add('active');
    })
})


//EVENTS
openMenu.onclick = openNavMenu;
closeMenu.onclick = closeNavMenu;

playBtn.addEventListener('click', playVideo);
bannerVideo.addEventListener('ended', closeVideo);
window.addEventListener('scroll', navBg)



//FUNCTIONS

function openNavMenu(){
    navMenu.classList.add('visibleMenu');
}

function closeNavMenu(){
    navMenu.classList.remove('visibleMenu');
}

//THIS FUNCTION PLAY THE VIDEO WHEN THE USER CLICK ON PLAY-BUTTON AND HIDE THE BANNER OF THE PAGE
function playVideo() {
    bannerVideoContent.classList.add('banner-visible');
    bannerVideo.play();
    bannerContent.classList.add('hidden-banner');
}

//THIS FUNCTION CLOSE THE VIDEO AND SHOWS THE BANNER OF THE PAGE AGAIN
function closeVideo() {
    bannerVideoContent.classList.remove('banner-visible');
    bannerContent.classList.remove('hidden-banner')
}

function navBg(e){
    nav.classList.toggle("active", window.scrollY > 0);
}

let index = 0;

function ShowNextTestimonial() {
    // Ocultar todas las tarjetas y asegurarse de que no estén activas
    for (let i = 0; i < sliderContainer.length; i++) {
        if (sliderContainer[i].classList.contains('active')) {
            sliderContainer[i].classList.remove('active');
            sliderContainer[i].style.opacity = 0;
            sliderContainer[i].style.transform = "translateX(-100%)"; // Sale por la izquierda
        }
    }

    // 👇 Aseguramos que la siguiente tarjeta entre desde la derecha
    sliderContainer[index].style.transition = 'none'; // QUIT THE TRANSITION
    sliderContainer[index].style.transform = "translateX(100%)"; // THE ACTEIVE GET BY THE LEFT
    sliderContainer[index].style.opacity = 0;

    sliderContainer[index].offsetWidth; // FORZED REFLOW(TO APPLY CAHNGES INMEDIATLY)

    sliderContainer[index].style.transition = ''; // restart transition

    // 👇 Activamos y animamos la tarjeta
    sliderContainer[index].classList.add('active');
    sliderContainer[index].style.opacity = 1;
    sliderContainer[index].style.transform = "translateX(0)";

    // NEXT INDEX
    index = (index + 1) % sliderContainer.length;
}

setInterval(ShowNextTestimonial, 5000);