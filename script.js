// Navbar.js
function toggleMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('active');
}




 
  /*================LOADING SCREEN================*/
  
  // This waits for the entire page to load
  
  window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
  
    // Simulate a delay before hiding the loading screen (e.g., 3 seconds)
    setTimeout(function() {
      loadingScreen.style.display = 'none';
    }, 3540); // 5000 milliseconds = 5 seconds
  });
  

/*------   typed JS --------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.multiple-text', {
        strings: ['WILSON DE MOURA'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
    });
});

   /*=====================LANGUAGES TRANSLATOR=================*/
  
  // Add event listener to language switcher
  const translations = {
    en: {
        nav:"About",
        title: "",
        description: "Where every sip is an experience, and every moment feels like the best day of summer. We’re not just about great coffee; we serve delicious, healthy food that nourishes your body while delighting your taste buds. Vibrant, fresh, and full of life, NUDE is your charming escape!",
      
    },
    fr: {
        nav:"À propos",
        title: "",
        description: "Bienvenue chez NUDE Coffee Shop – où chaque gorgée est une expérience, et chaque moment ressemble au meilleur jour d'été. Nous ne nous contentons pas de servir un excellent café ; nous proposons une nourriture délicieuse et saine qui nourrit votre corps tout en régalant vos papilles. Dynamique, frais et plein de vie, NUDE est votre charmante escapade !",
       
    }
};




function switchLanguage(lang) {
    // Update both title and description
    document.getElementById('nav').innerText = translations[lang].nav;
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('description').innerText = translations[lang].description;


}
