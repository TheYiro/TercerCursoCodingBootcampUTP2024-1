//● V01
//● Ing. Jerónimo Mape Soto
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Hacer una piramide inversa descendente con la letra P en mayus hasta desde la columna 34 hasta la columna 46 y hasta la fila 1.
// Programa que imprime con letra Z una piramide.

function imprimirPatron(filas) {
    // Iterar sobre cada fila del patrón en orden descendente
    for (let i = filas; i >= 1; i--) {
        // Imprimir espacios en blanco antes de la primera 'z'
        for (let j = 1; j < i * 2; j++) {
            process.stdout.write(" ");
        }
        // Imprimir la primera 'z'
        process.stdout.write("z");

        // Imprimir espacios en blanco entre las 'z'
        for (let k = 2; k <= (filas - i) * 4; k++) {
            process.stdout.write(" ");
        }

        // Imprimir la segunda 'z', excepto en la última fila
        if (i < filas) {
            process.stdout.write("z");
        }

        // Salto de línea para pasar a la siguiente fila
        console.log();
    }
}

// Llamar a la función para imprimir el patrón con 10 filas
imprimirPatron(10);
