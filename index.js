function updateClock() {
  // Obtenir la date et l'heure actuelles
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // Calculer les angles pour chaque aiguille en fonction de l'heure
  var secondsAngle = (seconds * 6); // Chaque seconde fait avancer de 6 degrés
  var minutesAngle = (minutes * 6) + (seconds / 10); // Minutes + fraction de minute en fonction des secondes
  var hoursAngle = (hours * 30) + (minutes / 2); // Heures + fraction d'heure en fonction des minutes

  // Appliquer les rotations aux aiguilles
  document.querySelector('.seconds').style.transform = `rotateZ(${secondsAngle}deg)`;

  document.querySelector('.minutes').style.transform = `rotateZ(${minutesAngle}deg)`;
  document.querySelector('.hours').style.transform = `rotateZ(${hoursAngle}deg)`;
 
}

// Mettre à jour l'horloge toutes les secondes
setInterval(updateClock, 1000);

// Appeler la fonction pour initialiser l'horloge au chargement de la page
updateClock();
