function toggleMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('active');
}






 /*=====================LANGUAGES TRANSLATOR=================*/
  
  // Add event listener to language switcher
  const translations = {
    en: {
        fr_text: " Hey there! I’m Wilson de Moura, a Designer & Frontend Developer living in Paris with a background in filmmaking and theatre. So yeah, you could say I know a thing or two about setting the stage and making things look epic, whether it’s  on screen or on the web. I started my adventure in web development in early 2023, and let’s just say it’s been one wild, code-fueled ride ever since. I’m all about creating websites that not only work like a charm but also make you say, “Wow, that’s  slick!” If you’re a business owner itching to launch a website, a developer ready to brainstorm the next big thing, or just someone who enjoys the finer things in  life, drop me a message.  Let’s team up and make something so cool. P.S. Don’t worry, I won’t make you sit through any of my old theatre monologues. Unless you  ask nicely",
        fr_title: "My skills",
        fr_skills: "I'm on a non-stop upgrade spree, sharpening my web dev skills like a codeninja—constantly evolving, constantly leveling up!",
        title:"",
        description: "",
    },
    fr: {
        fr_text: "Salut ! Moi, c’est Wilson de Moura, Designer et Développeur Frontend basé à Paris, avec un parcours en cinéma et théâtre. Autant dire que je m’y connais en mise en scène et en création d’ambiances épiques, que ce soit à l’écran ou sur le web. J'ai commencé mon aventure dans le développement web au début de 2023, et disons simplement que ça a été un sacré voyage, plein de code et d’adrénaline depuis. Je suis passionné par la création de sites qui non seulement fonctionnent parfaitement mais qui font aussi dire : « Waouh, c’est super stylé ! Si vous êtes un entrepreneur prêt à lancer un site, un développeur qui veut brainstormer la prochaine grande idée, ou simplement quelqu'un qui apprécie les belles choses, envoyez-moi un message. Travaillons ensemble pour créer quelque chose de vraiment cool. P.S. Promis, je ne vous ferai pas écouter mes vieux monologues de théâtre… sauf si vous insistez gentiment.",
        fr_title: "Mes compétences",
        fr_skills: "Je suis en mode amélioration continue, aiguisant mes compétences en développement web comme un ninja du code—constamment en évolution, toujours en train de monter en niveau !",
        title:"",
        description: "",
    }
};




function switchLanguage(lang) {
    // Update both title and description
    
    document.getElementById('fr_text').innerText = translations[lang].fr_text;
    document.getElementById('fr_title').innerText = translations[lang].fr_title;
    document.getElementById('fr_skills').innerText = translations[lang].fr_skills;
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('description').innerText = translations[lang].description;
}