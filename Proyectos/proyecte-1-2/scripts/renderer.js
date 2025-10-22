// renderer.js

// Dibuja la matriz del juego como una cuadrícula de divs
function dibujarTablero(matriz) {
    const tablero = document.querySelector('#game-board');
    tablero.innerHTML = '';

    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            const celda = document.createElement('div');
            celda.classList.add('celda');

            // Si la celda contiene un enemigo
            if (matriz[fila][columna] === 1) {
                celda.classList.add('enemigo');
                const imagen = document.createElement('img');
                imagen.src = 'assets/imatges/ghost.png';
                imagen.alt = 'Enemigo';
                imagen.style.width = '100%';
                imagen.style.height = '100%';
                celda.appendChild(imagen);
            } else if (matriz[fila][columna] === 2) {
                celda.classList.add('padman');
                const imagen = document.createElement('img');
                imagen.src = 'assets/imatges/pacman.png';
                imagen.alt = 'Padman';
                imagen.style.width = '100%';
                imagen.style.height = '100%';
                celda.appendChild(imagen);
            } else {
                celda.classList.add('vacia');
            }

            celda.dataset.fila = fila;
            celda.dataset.columna = columna;
            tablero.appendChild(celda);
        }
    }
}
console.log("Renderer script cargado");