import {dibuixaUnivers, aleatori, aleatoriPercentatge, crearMatriz} from './funciones.js';

// Testeo de la función de aleatori()
let contadorTrue = 0;
let contadorFalse = 0;
let pruebas = 10000; 

for (let i = 0; i < pruebas; i++) {
    if (aleatori()) {
        contadorTrue++;
    } else {
        contadorFalse++;
    }
}
console.log("True de la función aleatorio:", contadorTrue);
console.log("False de la función aleatorio:", contadorFalse);


//testear la funció aleatoriPercentatge(percentatge)
let percentatge = 30; 
let contadorTruePercentatge = 0;
let contadorFalsePercentatge = 0;
let provesPercentatge = 10000; 

for (let i = 0; i < provesPercentatge; i++) {
    if (aleatoriPercentatge(percentatge)) {
        contadorTruePercentatge++;
    } else {
        contadorFalsePercentatge++;
    }
}
console.log("Percentatge:", percentatge + "%");
console.log("True de funcion AleatoriPercentatge:", contadorTruePercentatge);
console.log("False de funcion AleatoriPercentatge:", contadorFalsePercentatge);


let matriuInicial = crearMatriz(50, 50);
dibuixaUnivers(matriuInicial);