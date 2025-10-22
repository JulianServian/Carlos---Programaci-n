// enemy.js
// Genera un array de enemigos en posiciones aleatorias
function generarEnemigos(filas, columnas, cantidad, padman) {
    const enemigos = [];
    let posiciones = new Set();
    while (enemigos.length < cantidad) {
        const fila = Math.floor(Math.random() * filas);
        const columna = Math.floor(Math.random() * columnas);
        const clave = `${fila},${columna}`;
        // Evita que dos enemigos estén en la misma celda y que aparezcan donde está Padman
        if (!posiciones.has(clave) && !(fila === padman.fila && columna === padman.columna)) {
            posiciones.add(clave);
            enemigos.push({ fila, columna, vivo: true });
        }
    }
    return enemigos;
}