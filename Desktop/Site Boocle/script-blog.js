window.onload = function() {
  // Sélectionnez le bouton de retour
  const boutonRetour = document.getElementById('bouton-retour');

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton
  boutonRetour.addEventListener('click', function() {
    // Redirigez l'utilisateur vers la page "index.html"
    window.location.href = 'index.html#team';
  });

  // Sélectionnez tous les éléments post-container
  const containers = document.querySelectorAll('.post-container');

  // Ajoutez un gestionnaire d'événements pour chaque conteneur
  containers.forEach(function(container) {
    container.addEventListener('mouseover', function() {
      const video = container.querySelector('video');
      if (video) {
        video.play();
      }
    });
  });

  // Sélectionnez toutes les vidéos pour qu'elles jouent automatiquement dès le chargement
  const videos = document.querySelectorAll('.video-zoom video');
  videos.forEach(function(video) {
    video.play();
  });
};
