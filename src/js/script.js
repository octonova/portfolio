// const hamburger = document.querySelector('.hamburger'),
//     overlay = document.querySelector('.menu_overlay'),
//     menu = document.querySelector('.menu'),
//     closeElem = document.querySelector('.menu_close'),
//     menuLink = document.querySelectorAll('.menu_link');

// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

// overlay.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

// menuLink.forEach(element => {
//     element.addEventListener('click', () => {
//         menu.classList.remove('active');
//     });
// });

// const counters = document.querySelectorAll('.skills_ratings-counter'),
//     section = document.querySelector('.skills_ratings'),
//     lines = document.querySelectorAll('.skills_ratings-line span');

// function showCounter() {
//     counters.forEach((element, i) => {
//         lines[i].style.opacity = 1;
//         lines[i].style.width = element.innerHTML;
//     });
// }

// function hideCounter() {
//     counters.forEach((element, i) => {
//         lines[i].style.opacity = 0;
//         lines[i].style.width = 0;
//     });
// }

// window.addEventListener('scroll', () => {
//     const screenPosition = window.pageYOffset;

//     if (screenPosition >= 3510 || screenPosition <= 2760) {
//         hideCounter();
//     } else {
//         showCounter();
//     }

// });

// // Слайдер для изображений;

// const imageUrls = [
//     'img/jpg/main_ph_1.jpg',
//     'img/jpg/main_ph_2.jpg',
//     'img/jpg/main_ph_3.jpg'
//   ];

//   function startImageSlider(imageUrls) {
//     let currentIndex = 0;
//     const sliderImages = document.querySelectorAll('.promo_slider img');

//     setInterval(() => {
//       currentIndex = (currentIndex + 1) % imageUrls.length;
//       sliderImages.forEach((img, index) => {
//         if (index === currentIndex) {
//           img.style.display = 'block';
//         } else {
//           img.style.display = 'none';
//         }
//       });
//     }, 1000); // меняем изображение каждые 5 секунд
//   }

//   startImageSlider(imageUrls);

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

// hamburger.addEventListener('click', function () {
//     menu.classList.add('active');
//     hamburger.classList.add('hamburger-active')
// })

// overlay.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

// menuLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         menu.classList.remove('active');
//     });
// });

const counters = document.querySelectorAll('.skills__ratings-counter');
const section = document.querySelector('.skills__ratings');
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

    if (screenPosition >= 3510 || screenPosition <= 2760) {
        hideCounter();
    } else {
        showCounter();
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
    // "img/slider/lines/3.png"
    // "img/slider/lines/4.png",
    // "img/slider/lines/5.png"
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

