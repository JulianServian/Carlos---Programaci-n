//Dibujar 
export function dibuixaUnivers(matriu) {
  let univers = '<div class="univers">';
  for (let i = 0; i < matriu.length; i++) {
    univers += '<div class="fila">';
    for (let j = 0; j < matriu[i].length; j++) {
      let estat = matriu[i][j] ? 'viva' : 'muerta';
      univers += '<div class="celula ' + estat + '" data-id="' + i + '-' + j + '"></div>';
    }
    univers += '</div>';
  }
  univers += '</div>';
  document.body.innerHTML += univers;
}

// Funció aleatori()
export function aleatori() {
    if (Math.random() < 0.5) {
        return true;
    } else {
        return false;
    }
}

// Funció aleatoriPercentatge(percentatge)
export function aleatoriPercentatge(percentatge) {
    if (Math.random() * 100 < percentatge) {
        return true;
    } else {
        return false;
    }
}

// Funció crearMatriz(filas, columnas)
export function crearMatriz(filas, columnas) {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push(aleatori());
        }
        matriz.push(fila);
    }
    return matriz;
}

// Funció comptarVeinsVius(matriu, x, y)
export function comptarVeinsVius(matriu, x, y) {
    let comptador = 0;

    // Direccions dels veins: (dx, dy)
    let direccions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],            [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (let i = 0; i < direccions.length; i++) {
        let dx = direccions[i][0];
        let dy = direccions[i][1];
        let nx = x + dx;
        let ny = y + dy;

        // Comprovem que la nova posició estigui dins de la matriu
        if (nx >= 0 && nx < matriu.length && ny >= 0 && ny < matriu[0].length) {
            if (matriu[nx][ny] === 1) {
                comptador++;
            }
        }
    }

    return comptador;
}

// Ejemplo de matriz para probar comptarVeinsVius
let matriu = [
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
];

// Test
console.log(comptarVeinsVius(matriu, 0, 0)); // 2
console.log(comptarVeinsVius(matriu, 1, 1)); // 3
console.log(comptarVeinsVius(matriu, 2, 2)); // 1

// Funció evolucionarCelula
export function evolucionarCelula(matriu, x, y) {
    const estatActual = matriu[x][y]; // true (viva) o false (morta)
    const veinsVius = comptarVeinsVius(matriu, x, y);

    if (estatActual) {
        // Cèl·lula viva
        if (veinsVius < 2) return false; // solitud
        if (veinsVius === 2 || veinsVius === 3) return true; // sigue viva
        return false; // poblacion excesiva
    } else {
        //celula muerta
        if (veinsVius === 3) return true; // reproducció
        return false;
    }
}

// Funció crearMatriuEvolucionada
export function crearMatriuEvolucionada(matriuActual) {
    let files = matriuActual.length;
    let columnes = matriuActual[0].length;
    let novaMatriu = [];

    for (let i = 0; i < files; i++) {
        let novaFila = [];
        for (let j = 0; j < columnes; j++) {
            let nouEstat = evolucionarCelula(matriuActual, i, j);
            novaFila.push(nouEstat);
        }
        novaMatriu.push(novaFila);
    }

    return novaMatriu;
}

// Funció copiarMatriu
export function copiarMatriu(matriuOrigen, matriuDesti) {
    matriuDesti.length = 0; // buidar la matriu de destí

    for (let i = 0; i < matriuOrigen.length; i++) {
        let filaCopiada = [];
        for (let j = 0; j < matriuOrigen[i].length; j++) {
            filaCopiada.push(matriuOrigen[i][j]);
        }
        matriuDesti.push(filaCopiada);
    }
} 