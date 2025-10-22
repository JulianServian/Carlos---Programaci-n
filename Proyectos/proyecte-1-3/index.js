import {
  crearMatriz,
  dibuixaUniversAmbEstat,
  crearMatriuEvolucionada,
  copiarMatriu
} from './funciones.js';

let files = 100;
let columnes = 150;
let univers = crearMatriz(files, columnes);
let intervalId = null;

// Dibuja el universo inicial
document.querySelector("#univers-container").innerHTML = '';
dibuixaUniversAmbEstat(univers);

// Actualiza el universo en cada generación
function actualitzarUnivers() {
  let novaGeneracio = crearMatriuEvolucionada(univers);
  copiarMatriu(novaGeneracio, univers);
  document.querySelector("#univers-container").innerHTML = '';
  dibuixaUniversAmbEstat(univers);
}

// Botón Iniciar
document.querySelector("#start").addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(actualitzarUnivers, 500);
  }
});

// Botón Pausar
document.querySelector("#pause").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

// Botón Reiniciar
document.querySelector("#reset").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  univers = crearMatriz(files, columnes);
  document.querySelector("#univers-container").innerHTML = '';
  dibuixaUniversAmbEstat(univers);
});

// Interacción: clic para cambiar estado de célula
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("celula")) {
    let [x, y] = e.target.dataset.id.split("-").map(Number);
    univers[x][y] = !univers[x][y];
    document.querySelector("#univers-container").innerHTML = '';
    dibuixaUniversAmbEstat(univers);
  }
});