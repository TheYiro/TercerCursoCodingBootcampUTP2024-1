//● V01
//● Ing. Jerónimo Mape Soto "Joaco" - Sebastian Tamayo "Soplayo" - JuanJose Corredor "Chili" -  Daniel Ramirez Hernandez
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Programa que genera parejas de enteros.

// Esta función genera parejas de enteros, donde el primer número es el índice y el segundo número es su "pareja".
// La "pareja" se calcula de tal manera que los números pares se dividen entre 2 y los números impares se ajustan para formar una secuencia de parejas.
function generarParejasEnteros() {
    let maximo = 9; // Máximo valor para las parejas de números

    // Ciclo que recorre desde 0 hasta el valor máximo
    for (let i = 0; i <= maximo; i++) {
        let pareja; // Variable para almacenar la pareja correspondiente a cada número

        // Se verifica si el número es par o impar
        if (i % 2 === 0) {
            pareja = i / 2; // Si es par, la pareja es la mitad del número
        } else {
            pareja = (i - 1) / 2 + 1; // Si es impar, se ajusta el cálculo para formar la secuencia de parejas
        }

        // Se imprime el índice y su pareja correspondiente
        console.log(i + " " + pareja);
    }
}

// Llamada a la función para generar las parejas de enteros
generarParejasEnteros();