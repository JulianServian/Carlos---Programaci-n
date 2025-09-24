console.log("renderer script cargado");

function renderizarTablero(filas, columnas) {
    let contenedor = document.querySelector("#ContenedorDelJuego");
    contenedor.innerHTML = ""; 

let añadirhtml = "";

for (let i = 0; i < filas; i++) {
  for (let j = 0; j < columnas; j++) {
    añadirhtml = añadirhtml + `<div class="celda"></div>`;
  }
}

contenedor.innerHTML = añadirhtml;
}