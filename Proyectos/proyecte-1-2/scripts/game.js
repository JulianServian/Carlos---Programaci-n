
const FILAS = 10;
const COLUMNAS = 10;

let tablero = [];
let enemigos = [];
let padman = {
    fila: Math.floor(FILAS / 2),
    columna: Math.floor(COLUMNAS / 2),
    puntuacion: 0
};

// Crear la matriz bidimensional vacía
function crearMatriz() {
    tablero = [];
    for (let i = 0; i < FILAS; i++) {
        let fila = [];
        for (let j = 0; j < COLUMNAS; j++) {
            fila.push(0); // 0 = celda vacía
        }
        tablero.push(fila);
    }
}

// Generar enemigos en posiciones aleatorias
function generarEnemigos(filas, columnas, cantidad, padman) {
    const enemigos = [];
    let posiciones = [];
    while (enemigos.length < cantidad) {
        const fila = Math.floor(Math.random() * filas);
        const columna = Math.floor(Math.random() * columnas);
        const clave = fila + '-' + columna;

        // Evitar duplicados y la posición de Padman
        if (!posiciones.includes(clave) && !(fila === padman.fila && columna === padman.columna)) {
            posiciones.push(clave);
            enemigos.push({ fila, columna, vivo: true });
        }
    }
    return enemigos;
}

// Inicializar el tablero con enemigos y Padman
function inicializarTablero() {
    crearMatriz();
    enemigos = generarEnemigos(FILAS, COLUMNAS, 10, padman);
    enemigos.forEach(e => {
        if (e.vivo) tablero[e.fila][e.columna] = 1; // 1 = enemigo
    });
    tablero[padman.fila][padman.columna] = 2; // 2 = Padman
}

// Dibujar el tablero en el HTML
inicializarTablero();
dibujarTablero(tablero);
if (typeof mostrarPuntuacion === 'function') {
    mostrarPuntuacion(padman.puntuacion);
}

// Control del movimiento de Padman
document.addEventListener('keydown', function(event) {
    let nuevaFila = padman.fila;
    let nuevaColumna = padman.columna;

    if (event.key === 'ArrowUp') nuevaFila--;
    if (event.key === 'ArrowDown') nuevaFila++;
    if (event.key === 'ArrowLeft') nuevaColumna--;
    if (event.key === 'ArrowRight') nuevaColumna++;

    // Límites del tablero
    if (nuevaFila < 0 || nuevaFila >= FILAS || nuevaColumna < 0 || nuevaColumna >= COLUMNAS) return;

    // Comprobar si hay enemigo en la nueva posición
    for (let i = 0; i < enemigos.length; i++) {
        if (enemigos[i].vivo && enemigos[i].fila === nuevaFila && enemigos[i].columna === nuevaColumna) {
            enemigos[i].vivo = false;
            padman.puntuacion++;
            if (typeof mostrarPuntuacion === 'function') {
                mostrarPuntuacion(padman.puntuacion);
            }
        }
    }

    tablero[padman.fila][padman.columna] = 0;
    padman.fila = nuevaFila;
    padman.columna = nuevaColumna;
    tablero[padman.fila][padman.columna] = 2;
    enemigos.forEach(e => {
        if (e.vivo) tablero[e.fila][e.columna] = 1;
        else tablero[e.fila][e.columna] = 0;
    });

    dibujarTablero(tablero);

    if (padman.puntuacion === enemigos.length) {
        setTimeout(() => {
            alert('Ganaste!');
        }, 100);
    }
});

