window.onload = function() {
  // Sélectionnez le bouton de retour
  const boutonRetour = document.getElementById('bouton-retour');

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton
  boutonRetour.addEventListener('click', function() {
    // Redirigez l'utilisateur vers la page "index.html"
    window.location.href = 'index.html#contact';
  });
  };