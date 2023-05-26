// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
  // Scroll vers le haut à l'ouverture de la page
  window.scrollTo(0, 0);

  setInitialLanguage();

// Axeptio
window.onload = function() {
  var lang = navigator.language || navigator.userLanguage;
  
  var script = document.createElement("script");
  script.type = "text/javascript";
  
  if(lang.startsWith("fr")) {
    script.src = "axeptio-fr.js";
  } else {
    script.src = "axeptio-en.js";
  }
  
  document.head.appendChild(script);
}
// Intégration Axeptio
window.axeptioSettings = {
  clientId: "64660326c09a93fac4d2e1e5",
};

(function (d, s) {
  var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
  e.async = true;
  e.src = "//static.axept.io/sdk.js";
  t.parentNode.insertBefore(e, t);
})(document, "script");


  // Boutons pour changer de langue
  const languageToggleButtons = document.querySelectorAll(".language-toggle");
  languageToggleButtons.forEach(button => {
    button.addEventListener("click", toggleLanguage);
  });

  // Fonctions spécifiques pour iPhone
  if (isiPhone()) {
    handleIPhoneScroll();
    handleBackgroundResize();
    handleSoundToggle();
  }
});

// Fonctions de détection pour Android et iPhone
function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

function isiPhone() {
  return /iPhone/i.test(navigator.userAgent);
}

// Fonction pour le défilement doux
function smoothScroll(event) {
  // Code pour le défilement doux
}

// Fonction pour définir la langue initiale
function setInitialLanguage() {
  const enTexts = Array.from(document.querySelectorAll(".en-text"));
  const frTexts = Array.from(document.querySelectorAll(".fr-text"));
  const languageToggleButtons = Array.from(document.querySelectorAll(".language-toggle"));
  let formFields = Array.from(document.querySelectorAll('.form-field'));

  // Supposons que la langue initiale soit l'anglais.
  enTexts.forEach(text => text.style.display = "block");
  frTexts.forEach(text => text.style.display = "none");
  languageToggleButtons.forEach(button => button.innerText = "FR");
  formFields.forEach(field => field.setAttribute('title', 'Fill in this field'));
}

// Fonction pour changer de langue
function toggleLanguage() {
  const enTexts = Array.from(document.querySelectorAll(".en-text"));
  const frTexts = Array.from(document.querySelectorAll(".fr-text"));
  const languageToggleButtons = Array.from(document.querySelectorAll(".language-toggle"));
  let formFields = Array.from(document.querySelectorAll('.form-field'));

  if (enTexts[0].style.display !== "none") {
    // Si les textes en anglais sont actuellement visibles, passez au français.
    toggleTextVisibility("fr-text", "en-text");
    languageToggleButtons.forEach(button => button.innerText = "EN");
    formFields.forEach(field => field.setAttribute('title', 'Remplissez ce champ'));
  } else {
    // Sinon, passez à l'anglais.
    toggleTextVisibility("en-text", "fr-text");
    languageToggleButtons.forEach(button => button.innerText = "FR");
    formFields.forEach(field => field.setAttribute('title', 'Fill in this field'));
  }
}

// Fonction pour alterner la visibilité des textes
function toggleTextVisibility(showClass, hideClass) {
  const textsToShow = document.querySelectorAll(`.${showClass}`);
  const textsToHide = document.querySelectorAll(`.${hideClass}`);

  textsToShow.forEach(text => text.style.display = "block");
  textsToHide.forEach(text => text.style.display = "none");
}

// Fonction pour gérer le défilement sur iPhone
function handleIPhoneScroll() {
  // Code pour gérer le défilement sur iPhone
}

// Fonction pour gérer le redimensionnement de l'arrière-plan
function handleBackgroundResize() {
  // Code pour gérer le redimensionnement de l'arrière-plan
}

// Fonction pour gérer l'activation/désactivation du son
function handleSoundToggle() {
  // Code pour gérer l'activation/désactivation du son
}



