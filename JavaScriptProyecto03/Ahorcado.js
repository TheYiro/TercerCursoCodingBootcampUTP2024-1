//● V01
//● Ing. Jerónimo Mape Soto "Joaco"
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Programa que emula el juego del ahorcado.

// Importar la librería prompt-sync para la entrada de datos del usuario
const prompt = require('prompt-sync')();

// Inicializar variables del juego
let palabraSecreta = "";        // Palabra secreta que el jugador debe adivinar
let longitudPalabra = 0;        // Longitud de la palabra secreta
let letrasAdivinadas = "";      // Letras que el jugador ha adivinado correctamente
let partesCuerpo = 0;           // Número de partes del cuerpo dibujadas
let letrasJugadas = [];         // Letras que el jugador ha intentado adivinar

// Función para generar una palabra secreta aleatoria
function generarPalabraAleatoria() {
    // Lista de palabras posibles
    let palabras = ["ola", "pollito", "murcielago", "universidad", "pereira"];
    // Seleccionar una palabra aleatoria de la lista
    return palabras[Math.floor(Math.random() * palabras.length)];
}

// Función para imprimir el ahorcado
function imprimirAhorcado(partesCuerpo) {
    let muñeco = [
        "+----+",
        "|    " + (partesCuerpo >= 1 ? "0" : ""),
        "|    " + (partesCuerpo >= 2 ? "/|\\" : ""),
        "|    " + (partesCuerpo >= 3 ? "|" : ""),
        "|    " + (partesCuerpo >= 4 ? "/ \\" : ""),
        "----"
    ];
    console.log(muñeco.join("\n"));
}

// Generar una palabra secreta aleatoria y almacenar su longitud
palabraSecreta = generarPalabraAleatoria();
longitudPalabra = palabraSecreta.length;

// Mostrar encabezado del juego
console.log("JUEGO AHORCADO");
console.log("+----+");
console.log("|" +  "     " + "_ ".repeat(longitudPalabra));
console.log("|");
console.log("|      Letras Jugadas:");
console.log("|");
console.log("-----");

// Bucle del juego
while (partesCuerpo < 6) {
    // Pedir al jugador que ingrese una letra
    let letra = prompt("Entre una letra: ").toLowerCase(); // Convertir la letra a minúscula

    // Verificar si la letra ya ha sido jugada
    if (letrasJugadas.includes(letra)) {
        console.log("¡Ya has jugado esa letra! Intenta con otra.");
        continue; // Saltar a la siguiente iteración del bucle
    }

    // Registrar la letra como jugada
    letrasJugadas.push(letra);

    // Verificar si la letra está en la palabra secreta
    if (palabraSecreta.includes(letra)) {
        letrasAdivinadas += letra;

        // Actualizar la representación de la palabra oculta
        let representacionPalabra = "";
        for (let i = 0; i < longitudPalabra; i++) {
            if (letrasAdivinadas.includes(palabraSecreta[i])) {
                representacionPalabra += palabraSecreta[i] + " ";
            } else {
                representacionPalabra += "_ ";
            }
        }

        // Verificar si se han adivinado todas las letras de la palabra secreta
        if (!representacionPalabra.includes("_")) {
            console.log("¡Felicidades! Has adivinado la palabra:", palabraSecreta);
            break; // Salir del bucle del juego
        } else {
            // Mostrar estado actual del juego
            console.log("JUEGO AHORCADO");
            imprimirAhorcado(partesCuerpo);
            console.log("|      " + representacionPalabra);
            console.log("|");
            console.log(`|      Letras Jugadas: ${letrasJugadas.join(", ")}`);
            console.log("|");
            console.log("-----");
        }
    } else {
        // Incrementar el número de partes del cuerpo dibujadas
        partesCuerpo++;

        // Mostrar estado actual del juego
        console.log("JUEGO AHORCADO");
        imprimirAhorcado(partesCuerpo);
        console.log(`|      ${"_ ".repeat(longitudPalabra)}`);
        console.log("|");
        console.log(`|      Letras Jugadas: ${letrasJugadas.join(", ")}`);
        console.log("|");
        console.log("-----");
    }
}

// Verificar si se ha perdido el juego
if (partesCuerpo === 6) {
    console.log("¡Oh no! Te has quedado ahorcado. La palabra era:", palabraSecreta);
}