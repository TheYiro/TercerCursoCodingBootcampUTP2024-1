//● V01
//● //● Ing. Jerónimo Mape Soto "Joaco" - Sebastian Tamayo "Soplayo" - JuanJose Corredor "Chili" -  Daniel Ramirez Hernandez
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Hacer una piramide inversa descendente con letras especificas en mayus hasta la columna 13 y hasta la fila 7.

const letras = ['P', 'N', 'L', 'J', 'H', 'F', 'D'];
const tamano = 13; // Número de columnas
const altura = 7; // Número de filas
// Ciclo para recorrer las filas
for (let fila = 0; fila < altura; fila++) {
    let linea = '';
    // Ciclo para recorrer las columnas
    for (let columna = 0; columna < tamano; columna++) {
        // Condición para decidir qué letra imprimir en cada posición
        if (columna >= fila && columna < tamano - fila) {
            // Si la columna está dentro del rango, imprimir la letra correspondiente
            linea += letras[fila] + ' ';
        } else {
            // Si no, imprimir un espacio en blanco
            linea += '  ';
        }
    }
    // Imprimir la línea completa
    console.log(linea);
}
