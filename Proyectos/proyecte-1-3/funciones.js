//Dibujar univers
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


