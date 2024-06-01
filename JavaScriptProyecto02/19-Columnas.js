//● V01
//● Ing. Jerónimo Mape Soto
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Hacer una piramide inversa descendente con la letra P en mayus hasta desde la columna 34 hasta la columna 46 y hasta la fila 1.
console.log("Triángulo descendente de letras A:");

const filas = 6; // Número de filas del triángulo
const inicioColumna = 40; // Columna donde empieza el triángulo
const finColumna = 35; // Columna donde termina el triángulo

// Ciclo para recorrer las filas del triángulo
for (let fila = 1; fila <= filas; fila++) {
    let linea = ''; // Variable para almacenar la línea actual

    // Ciclo para agregar espacios en blanco al inicio de cada fila
    for (let espacio = 1; espacio <= inicioColumna - finColumna - (filas - fila); espacio++) {
        linea += ' ';
    }

    // Ciclo para agregar letras 'A' a la fila
    for (let columna = inicioColumna; columna >= finColumna; columna--) {
        linea += 'A';
    }

    // Imprimir la línea completa
    console.log(linea);
}
