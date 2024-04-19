//● V01
//● Ing. Jerónimo Mape Soto "Joaco" - Sebastian Tamayo "Soplayo" - JuanJose Corredor "Chili" -  Daniel Ramirez Hernandez
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Hacer una piramide inversa descendente con la letra P en mayus hasta desde la columna 34 hasta la columna 46 y hasta la fila 1.

// Esta función imprime un patrón en forma de pirámide con letras 'P' utilizando ciclos anidados.
// El parámetro 'filas' indica el número de filas en la pirámide.
function imprimirPatron(filas) {
    // Ciclo externo para iterar sobre cada fila de la pirámide
    for (let i = 0; i < filas; i++) {
        // Ciclo interno para imprimir los espacios en blanco antes de los caracteres 'P'
        for (let j = 0; j < i; j++) {
            process.stdout.write("  "); // Imprimir dos espacios en blanco
        }
        // Ciclo interno para imprimir los caracteres 'P' en cada fila
        // El número de caracteres 'P' en cada fila sigue un patrón basado en la fila actual
        for (let k = 0; k < (2 * (filas - i) - 1); k++) {
            process.stdout.write("P "); // Imprimir un caracter 'P' seguido de un espacio en blanco
        }
        console.log(); // Imprimir un salto de línea al final de cada fila para pasar a la siguiente fila
    }
}

// Llamar a la función 'imprimirPatron' con el número de filas deseado (en este caso, 7)
imprimirPatron(7);

