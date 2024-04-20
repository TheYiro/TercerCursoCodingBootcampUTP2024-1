//● V01
//● Ing. Jerónimo Mape Soto "Joaco"
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Programa que emula el clasico juego de triki.

// Importar la librería prompt-sync para la entrada de datos del usuario
const prompt = require('prompt-sync')();

// Función para inicializar el tablero del triqui
function inicializarTablero() {
    return [
        ['1', '2', '3'],    // Fila 1
        ['4', '5', '6'],    // Fila 2
        ['7', '8', '9']     // Fila 3
    ];
}

// Función para imprimir el tablero del triqui
function imprimirTablero(tablero) {
    // Iterar sobre cada fila del tablero
    for (let fila of tablero) {
        // Imprimir los elementos de la fila separados por '|'
        console.log(fila.join(' | '));
        // Imprimir la línea divisoria entre filas
        console.log('---+---+---');
    }
}

// Función para verificar si hay un ganador en el triqui
function hayGanador(tablero) {
    // Verificar filas
    for (let fila of tablero) {
        if (fila[0] === fila[1] && fila[1] === fila[2]) {
            return fila[0];
        }
    }

    // Verificar columnas
    for (let i = 0; i < 3; i++) {
        if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]) {
            return tablero[0][i];
        }
    }

    // Verificar diagonales
    if ((tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) ||
        (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0])) {
        return tablero[1][1];
    }

    // Si no hay ganador, retornar null
    return null;
}

// Función para realizar un movimiento en el triqui
function realizarMovimiento(tablero, jugador, casilla) {
    // Iterar sobre cada casilla del tablero
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            // Si la casilla coincide con el número introducido por el jugador
            if (tablero[i][j] === casilla) {
                // Colocar la ficha del jugador en la casilla
                tablero[i][j] = jugador;
                return true; // Indicar que el movimiento fue exitoso
            }
        }
    }
    return false; // Indicar que la casilla ya está ocupada
}

// Función para verificar si todas las casillas del tablero están ocupadas
function todasCasillasOcupadas(tablero) {
    // Iterar sobre cada casilla del tablero
    for (let fila of tablero) {
        for (let casilla of fila) {
            // Si hay alguna casilla que no está ocupada por 'X' ni 'O'
            if (casilla !== 'X' && casilla !== 'O') {
                return false; // Retornar falso
            }
        }
    }
    return true; // Retornar verdadero si todas las casillas están ocupadas
}

// Función principal para jugar al triqui
function jugarTriqui() {
    // Inicializar el tablero
    let tablero = inicializarTablero();
    let jugadorActual = 'X'; // Inicializar el jugador actual como 'X'

    // Mostrar mensaje de bienvenida y reglas del juego
    console.log('¡Bienvenido al Triqui!');
    console.log('Jugador 1: X | Jugador 2: O');
    console.log('Para jugar, introduce el número de casilla en la que deseas colocar tu ficha.');
    console.log('¡Que comience el juego!\n');

    // Bucle principal del juego
    while (true) {
        imprimirTablero(tablero); // Imprimir el tablero actual

        // Pedir al jugador actual que introduzca una casilla
        let casilla = prompt(`Jugador ${jugadorActual}, introduce número de casilla:`);

        // Verificar si la entrada es un número válido de casilla (1-9)
        if (isNaN(casilla) || casilla < 1 || casilla > 9) {
            console.log('Por favor, introduce un número válido de casilla (1-9).');
            continue; // Volver al inicio del bucle
        }

        // Realizar el movimiento del jugador actual en el tablero
        if (!realizarMovimiento(tablero, jugadorActual, casilla)) {
            console.log('Casilla ya jugada. Por favor, elige otra.');
            continue; // Volver al inicio del bucle
        }

        // Verificar si hay un ganador después del movimiento
        let ganador = hayGanador(tablero);
        if (ganador) {
            imprimirTablero(tablero); // Imprimir el tablero final
            console.log(`¡El jugador ${jugadorActual} ha ganado!`); // Mostrar mensaje de victoria
            break; // Salir del bucle
        } else if (todasCasillasOcupadas(tablero)) {
            imprimirTablero(tablero); // Imprimir el tablero final
            console.log('¡Empate!'); // Mostrar mensaje de empate
            break; // Salir del bucle
        }

        // Cambiar al siguiente jugador
        jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
    }
}

// Llamar a la función principal para comenzar el juego
jugarTriqui();
