const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.menu__overlay');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

function showMenu() {
    hamburger.addEventListener('click', function () {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active')
            hamburger.classList.remove('hamburger-active')
        } else {
            menu.classList.add('active')
            hamburger.classList.add('hamburger-active')
        }
    })
    overlay.addEventListener('click', function () {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active')
            hamburger.classList.remove('hamburger-active')
        } else {
            menu.classList.add('active')
            hamburger.classList.add('hamburger-active')
        }
    })
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active')
                hamburger.classList.remove('hamburger-active')
            } else {
                menu.classList.add('active')
                hamburger.classList.add('hamburger-active')
            }
        })
    })
}

showMenu();

const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');


function showCounter() {
    counters.forEach((counter, i) => {
        lines[i].style.opacity = 1;
        lines[i].style.width = counter.innerHTML;
    });
}

function hideCounter() {
    counters.forEach((counter, i) => {
        lines[i].style.opacity = 0;
        lines[i].style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    const screenPosition = window.pageYOffset;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
        .test(navigator.userAgent)) {
        showCounter();

    } else {
        if (screenPosition >= 3510 || screenPosition <= 2760) {
            hideCounter();
        } else {
            showCounter();
        }
    }
});

const imageUrls = [
    'img/slider/main_ph_1-transformed.png',
    'img/slider/main_ph_2-transformed.png',
    'img/slider/main_ph_3-transformed.png',
    'img/slider/main_ph_4-transformed.png',
    'img/slider/main_ph_5-transformed.png',
    'img/slider/main_ph_6-transformed.png',
    'img/slider/main_ph_7-transformed.png',
];

const linesUrls = [
    'img/slider/lines/1.png',
    "img/slider/lines/2.png"
];

function promoSlider(imageUrls, linesUrls) {
    function imageSlider(imageUrls) {
        let currentIndex = 0;
        const sliderImages = document.querySelectorAll('.promo__slider_item img');

        setInterval(() => {
            currentIndex = (currentIndex + 1) % imageUrls.length;

            sliderImages.forEach((image, index) => {
                image.style.display = index === currentIndex ? 'block' : 'none';
            });
        }, 1000);
    }

    imageSlider(imageUrls);

    function linesSlider(linesUrls) {
        let currentIndex = 0;
        const sliderLines = document.querySelectorAll('.promo__slider_lines img');

        setInterval(() => {
            currentIndex = (currentIndex + 1) % linesUrls.length;

            sliderLines.forEach((image, index) => {
                image.style.display = index === currentIndex ? 'block' : 'none';
            });
        }, 1000);
    }

    linesSlider(linesUrls);
}

promoSlider(imageUrls, linesUrls);
