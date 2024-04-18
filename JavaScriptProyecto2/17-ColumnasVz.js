//● V01
//● Ing. Jerónimo Mape Soto
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Hacer una piramide inversa descendente con la letra P en mayus hasta desde la columna 34 hasta la columna 46 y hasta la fila 1.
// Programa que imprime una V con letras Z

function imprimirPatron(filas) {
    // Iterar sobre cada fila del patrón
    for (let i = 1; i <= filas; i++) {
        // Imprimir espacios en blanco antes de la primera 'Z'
        for (let j = 1; j < i * 2; j++) {
            process.stdout.write(" ");
        }
        // Imprimir la primera 'Z'
        process.stdout.write("Z");

        // Imprimir espacios en blanco entre las 'Z'
        for (let k = 2; k <= (filas - i) * 4; k++) {
            process.stdout.write(" ");
        }

        // Imprimir la segunda 'Z', excepto en la última fila
        if (i < filas) {
            process.stdout.write("Z");
        }

        // Salto de línea para pasar a la siguiente fila
        console.log();
    }
}

// Llamar a la función para imprimir el patrón con 10 filas
imprimirPatron(10);
