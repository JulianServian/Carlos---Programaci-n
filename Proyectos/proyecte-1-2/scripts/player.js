// player.js

// Actualiza la puntuación en el área de información
function mostrarPuntuacion(puntuacion) {
    const info = document.querySelector('#Info');
    info.textContent = `Enemigos comidos: ${puntuacion}`;
}