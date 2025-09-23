
const preguntas = [
  "¿Cuál es la capital de España?",
  "¿Qué planeta es conocido como el planeta rojo?",
  "¿Quién pintó La Gioconda?",
  "¿En qué continente está Egipto?",
  "¿Cuál es el océano más grande del mundo?",
  "¿Qué gas respiramos principalmente para vivir?",
  "¿Cuántos días tiene un año bisiesto?",
  "¿Qué animal es el más rápido del mundo?",
  "¿Cuál es el río más largo del planeta?",
  "¿Qué instrumento musical tiene teclas blancas y negras?",
  "¿Cuál es el país con mayor población del mundo?",
  "¿Quién escribió 'Don Quijote de la Mancha'?",
  "¿Cuál es el metal más ligero?",
  "¿Qué significa WWW en internet?",
  "¿Cuál es el idioma más hablado en el mundo?",
  "¿Qué número romano representa el 100?",
  "¿Qué parte del cuerpo bombea la sangre?",
  "¿Cuál es el continente más pequeño?",
  "¿Qué invento de Gutenberg revolucionó la escritura?",
  "¿Qué número es el único par que es primo?"
];


let posicion = 0;


const posicionTexto = document.querySelector("#posicion");
const preguntaTexto = document.querySelector("#pregunta");
const finalTexto = document.querySelector("#final");
const boton = document.querySelector("#botondado");


function tirarDado() {
  if (posicion >= 20) {
    return;
  }

  const dado = Math.floor(Math.random() * 6) + 1;
  posicion = posicion + dado;

  if (posicion >= 20) {
    posicion = 20;
    finalTexto.innerHTML = "<strong>Se acabó el juego</strong>";
    boton.innerHTML = "Juego terminado";
  }

  posicionTexto.innerHTML = "Posición actual: " + posicion;

  if (posicion < 20) {
    preguntaTexto.innerHTML = preguntas[posicion - 1];
  } else {
    preguntaTexto.innerHTML = "";
  }
}

boton.addEventListener("click", tirarDado);


