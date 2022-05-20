// DEFINICION DE VARIABLES

// BOTONES

let botonEspanol = document.getElementById("espanol")
let botonEnglish = document.getElementById("english")

// ESPACIOS DE TEXTO A TRADUCIR

let titulo = document.getElementById("presentacion__titulo")
let titulop2 = document.getElementById("presentacion__titulo2")
let titulop3 = document.getElementById("presentacion__titulo3")
let botonInicial = document.getElementById("boton2")

let nombreTrabajo = document.getElementById("card-jobtitle")
let cartaSubtitulo = document.getElementById("card-subtitle")
let cartaSubtituloDescripcion = document.getElementById("card-subtitleDescription")
let cartaSub2 = document.getElementById("card-subtitle2")
let cartaItemTitulo = document.getElementById("card-item-title")
let cartaItemDesc = document.getElementById("card-item-desc")
let cartaItemTitulo2 = document.getElementById("card-item-title2")
let cartaItemDesc2 = document.getElementById("card-item-desc2")
let cartaItemTitulo3 = document.getElementById("card-item-title3")
let cartaItemDesc3 = document.getElementById("card-item-desc3")
let cartaSub3 = document.getElementById("card-subtitle3")

let botonabajo1 = document.getElementById("pestana1")
let botonabajo2 = document.getElementById("pestana2")
let botonabajo3 = document.getElementById("pestana3")

//ESPACIOS TEXTO PROYECTOS

let proyrctoTitulo = document.getElementById("proyectos__titulo")
let proyectoDesc = document.getElementById("proyecto")
let proyectoLink = document.getElementById("enlace")
let proyectoLinkRepo = document.getElementById("linkrepo")


let proyectoDesc1 = document.getElementById("proyecto1")
let proyectoLink1 = document.getElementById("link1")
let proyectoLinkRepo1 = document.getElementById("linkrepo1")


let proyectoDesc2 = document.getElementById("proyecto2")
let proyectoLink2 = document.getElementById("link2")
let proyectoLinkRepo2 = document.getElementById("linkrepo2")


let proyectoDesc3 = document.getElementById("proyecto3")
let proyectoLink3 = document.getElementById("link3")
let proyectoLinkRepo3 = document.getElementById("linkrepo3")


let cv = document.getElementById("cvSource")


// FUNCION INGLES


botonEnglish.addEventListener ("click", function () {

    titulo.innerText = "Hi, My name is "
    titulop2.innerText = " and I am a Front-end Web Developer."
    titulop3.innerText = "Let me tell you more about me."
    botonInicial.innerText = "See More"

    nombreTrabajo.innerText = "Front-end Web Developer"
    cartaSubtitulo.innerText = "About Me"
    cartaSubtituloDescripcion.innerText = "Web Developer. Always searching for new horizons. I mix my commercial experience with my developer abilities. My stack: HTML5 - CSS3 - SASS - BOOTSTRAP - JAVASCRIPT - GIT - GITHUB."
    cartaSub2.innerText = "EXPERIENCE"
    cartaItemTitulo.innerText = "Area Seller at Ceramicas Lourdes."
    cartaItemDesc.innerText = "Senior regional Seller of 3 argentinian regions."
    cartaItemTitulo2.innerText = "Digital Sing Boss at Alpha 2000"
    cartaItemDesc2.innerText = "Legal and commercial Boss of digital sing"
    cartaItemTitulo3.innerText = "Web Developer at XYM Web Proyects"
    cartaItemDesc3.innerText = "Freelancer Web Developer"
    cartaSub3.innerText = "CONTACT"

    botonabajo1.innerText = "ABOUT ME"
    botonabajo2.innerText = "EXPERIENCE"
    botonabajo3.innerText = "CONTACT"

    proyrctoTitulo.innerText = "MY PROJECTS"
    proyectoDesc.innerText = "Web developed for my wedding. It has a welcome HTML, Single-Home-Page that contains all the event information and a side-page with a section for gifts. It uses HTML-CSS-SASS-JS."
    proyectoLink.innerText = "Visit the Web"
    proyectoLinkRepo.innerText = "See Repository"
    

    proyectoDesc1.innerText  = "First Web published on server, for my first client. Institutional Web for an Interior Decorator. Uses HTML-CSS-SASS."
    proyectoLink1.innerText  = "Visit the Web"
    proyectoLinkRepo1.innerText  = "See Repository"
    

    proyectoDesc2.innerText = "Institutional website for a tourist complex in Cordoba. Second client and my second Web uploaded to server. Also used HTML-CSS-SASS-JS."
    proyectoLink2.innerText = "Visit the Web"
    proyectoLinkRepo2.innerText = "See Repository"
    

    proyectoDesc3.innerText = "Final project of my course in JavaScript. Web focused on the prediction of the Qatar 2022 World Cup with a statistics section of the 32 participating teams. Used HTML-CSS-SASS-JS-JASON."
    proyectoLink3.innerText = "Visit the Web"
    proyectoLinkRepo3.innerText = "See Repository"

    cv.src = "./assets/english.pdf"

})

botonEspanol.addEventListener('click', () => { 
    location.reload();
});