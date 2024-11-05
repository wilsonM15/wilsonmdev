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
        fr_text: "I'm Wilson, I'M passionate about creating visually appealing and user-friendly websites",
        description: "I help businesses grow and expand their online presence",
        fr_contact: "Contact Me",
        title:""
    },
    fr: {
        fr_text: "Je suis Wilson, et je suis passionné par la création de sites web esthétiques et conviviaux.",
        description: "J'aide les entreprises à se développer et à renforcer leur présence en ligne.",
        fr_contact: "Contactez-moi",
        title:"",
    }
};




function switchLanguage(lang) {
    // Update both title and description
    
    document.getElementById('fr_text').innerText = translations[lang].fr_text;
    document.getElementById('description').innerText = translations[lang].description;
    document.getElementById('fr_contact').innerText = translations[lang].fr_contact;
    document.getElementById('title').innerText = translations[lang].title;
}
