//   all ------------------
function initParadoxWay() {
    "use strict";

    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },

            }
        });
    }

    // bubbles -----------------


    setInterval(function() {

        $('.bubbles').append('<div class="individual-bubble"</div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function() {
            $(this).remove()
        });
    }, 350);

}

//   Init All ------------------
$(document).ready(function() {
    initParadoxWay();
});

//Carousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 2.5
        },

        375: {
            items: 2.5
        },
        425: {
            items: 2.5
        },
        600: {
            items: 3
        },
        1000: {
            items: 4.3
        }
    }
})

//monthly menu

const wrappers = document.querySelectorAll(".item-wrapper");
const wrapArray = Array.from(wrappers);

wrapArray.forEach(item => {
    const text = item.childNodes[1]

    item.addEventListener("mouseover", function() {
        wrapArray.filter(others => {
            if (others !== item) {
                others.classList.remove("expand");
            }
        });
        this.classList.add("expand");
        text.classList.add('active')
    });

    item.addEventListener("mouseout", function() {
        this.classList.remove("expand");
        text.classList.remove('active')
    });
});


// Burger menu
let burger = document.querySelector('#burger-menu');
let box = document.querySelector('#mobile-nav-box');

burger.addEventListener('click', () => {
    if (box.classList.contains('hide')) {
        box.classList.remove('hide');

    } else {
        box.classList.add('hide');
    }
})

/* ---------------Loader------------ */


/* ---------------------------Video----------------------- */
/* var svgMorpheus = new SVGMorpheus('.loader');
var icons = ['step1', 'step2'];
var current = 0;


function changeIcon() {

    setTimeout(function () {
        svgMorpheus.to(icons[current++ % 2], { rotation: 'none', duration: 1000 });
        changeIcon()
    }, 1000);
}

changeIcon(); */