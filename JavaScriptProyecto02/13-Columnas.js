//● V01
//● Ing. //● Ing. Jerónimo Mape Soto "Joaco" - Sebastian Tamayo "Soplayo" - JuanJose Corredor "Chili" -  Daniel Ramirez Hernandez
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Hacer una piramide inversa descendente con la letra P en mayus hasta desde la columna 34 hasta la columna 46 y hasta la fila 1.

const letra = 'P';
const inicioColumna = 34;
const finColumna = 46;
const altura = 7;

// Ciclo para recorrer las filas
for (let fila = 0; fila <= altura; fila++) {
    let linea = '                                 ';
    // Ciclo para agregar espacios en blanco al inicio de cada fila
    for (let espacio = 0; espacio <= (fila) * 2; espacio++) {
        linea += ' ';
    }
    // Ciclo para agregar las letras 'P' a la fila
    for (let columna = inicioColumna; columna <= finColumna - (fila) * 2; columna++) {
        linea += letra + ' ';
    }
    // Imprimir la línea completa
    console.log(linea);
}
