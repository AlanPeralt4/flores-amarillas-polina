window.onload = () => {
    document.body.classList.remove("container");
};
// Modal
const modal = document.getElementById("letterModal");
const btn = document.getElementById("openLetterBtn");
const span = document.getElementById("closeLetter");

// Abrir modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar modal al hacer click en X
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar modal al hacer click fuera del contenido
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const startButton = document.getElementById("startFlowers");
const song = document.getElementById("song");

startButton.addEventListener("click", () => {
  // Mostrar las flores (ya lo tienes en tu animación)
  showFlowers(); // función que lanza la animación de flores

  // Reproducir la canción
  song.play();
});
