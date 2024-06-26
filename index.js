



/* View work button */
document.getElementById("arrow-button").addEventListener("click", function () {
       window.scrollTo(0,600);
    });
 
/*================================SCROLL REVEAL=================================== */
ScrollReveal({
        distance: '70px',
        duration: 2000,
        delay: 500,
    });
    
    ScrollReveal().reveal('.about, .profession, .left-animation, .footer-text', {origin: 'left'});
    ScrollReveal().reveal('.services-container, .right-animation, .meaning', {origin: 'right'});
    ScrollReveal().reveal('.projects, .heading, .About-Me', {origin: 'top'});
    ScrollReveal().reveal('.contact-box', {origin: 'bottom'});


/*------   typed JS --------------------------------*/

const typed = new Typed('.multiple-text', {
    strings: ['Wilson de Moura'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
        
    });

/*==================================scroll section================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("navbar nav");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                    links.classList.remove('active');
                    document.querySelector('navbar nav [href*="' + id + ']').classList.add('active');
                });
            };
        });
    };


/*==========================Sticky bar==============================*/

let navbar = document.querySelector('navbar');
navbar.classList.toggle('sticky', window.scrollY > 100);








