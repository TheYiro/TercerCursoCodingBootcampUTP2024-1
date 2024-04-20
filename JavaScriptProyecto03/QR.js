//● V01
//● Ing. Jerónimo Mape Soto "Joaco"
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Programa que realiza un codigo QR

// Definir una cadena inicial de 900 caracteres 'a'
let codigoQr = 'a'.repeat(900);

// Función para construir el código QR
function construirCodigoQr(contador, final) {
    if (contador <= final) {
        // Actualizar un caracter aleatorio por cada iteración, simulando la construcción del código QR
        codigoQr = codigoQr.substring(0, contador) +
            (Math.random() < 0.25 ? '█' : ' ') +
            codigoQr.substring(contador + 1);
        // Llamar recursivamente a la función para continuar la construcción
        construirCodigoQr(contador + 1, final);
    }
}

// Función para construir la periferia del código QR
function construirPeriferia(contador, final) {
    if (contador <= final) {
        // Actualizar caracteres en los bordes exteriores del código QR
        if (contador <= 30 || contador >= 870) {
            codigoQr = codigoQr.substring(0, contador) + ' ' + codigoQr.substring(contador + 1);
        }
        // Llamar recursivamente a la función para continuar la construcción
        construirPeriferia(contador + 1, final);
    }
}

// Funciones similares para construir la periferia izquierda y derecha del código QR
function construirPeriferiaIzquierda(contador, final) {
    if (contador <= final) {
        codigoQr = codigoQr.substring(0, contador) + ' ' + codigoQr.substring(contador + 1);
        construirPeriferiaIzquierda(contador + 30, final);
    }
}

function construirPeriferiaDerecha(contador, final) {
    if (contador <= final) {
        codigoQr = codigoQr.substring(0, contador) + ' ' + codigoQr.substring(contador + 1);
        construirPeriferiaDerecha(contador + 30, final);
    }
}

// Función para imprimir el código QR
function imprimirCodigoQr(contador, final, numeroFila) {
    if (contador <= final) {
        // Imprimir el código QR por filas con un formato predefinido
        if (contador <= 270) {
            console.log(` ${numeroFila}          |${codigoQr.substring(contador, contador + 30)}|${numeroFila}`);
        } else {
            console.log(` ${numeroFila}         |${codigoQr.substring(contador, contador + 30)}|${numeroFila}`);
        }
        // Llamar recursivamente a la función para imprimir la siguiente fila
        imprimirCodigoQr(contador + 30, final, numeroFila + 1);
    }
}

// Funciones para verificar condiciones específicas del código QR
function verificarCondicionB(contador, pixeles) {
    // Contar los píxeles negros en una región específica del código QR
}

function verificarCondicionC(contador, pixeles) {
    // Contar los píxeles negros en otra región específica del código QR
}

// Construir el código QR
construirCodigoQr(0, 899);
construirPeriferia(0, 899);
construirPeriferiaIzquierda(30, 840);
construirPeriferiaDerecha(59, 869);

// Imprimir el código QR
console.log("             012345678901234567890123456789 ");
console.log("            +------------------------------+");
imprimirCodigoQr(0, 899, 0);
console.log("            +------------------------------+");
console.log("             012345678901234567890123456789 ");
console.log("\n");

// Función adicional para imprimir el código QR en un formato diferente
function imprimirCodigoQr2(contador, final, numeroFila) {
    // Imprimir el código QR con un formato alternativo
}

// Imprimir el código QR en un formato diferente
console.log("             |0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9| ");
console.log("             +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
imprimirCodigoQr2(0, 899, 0);
console.log("             +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
console.log("             |0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9| ");

// Verificar condiciones específicas del código QR
const pixelesNegros = verificarCondicionB(52, 0);
const pixelesNegros2 = verificarCondicionC(213, 0);
console.log("Requisitos:");
console.log("a) Los píxeles de la periferia están siempre en blanco");
console.log("b) El código tiene reservados un cuadrado de 7x7 píxeles encajado en la parte más externa superior derecha (sin incluir la periferia), que debe estar formado por al menos 25 píxeles negros, con cualquier disposición");
console.log("c) En la séptima fila (subíndice 6 de la figura), las columnas en la figura 2, 4, y 25 del arreglo son píxeles de color negro.");
console.log(`Condicion a: se cumple`);
console.log(`Condicion b: ${pixelesNegros >= 25 ? "Se cumple." : "NO se cumple."}   Número de pixeles negros: ${pixelesNegros}`);
console.log(`Condicion c: ${pixelesNegros2 >= 3 ? "Se cumple." : "NO se cumple."}`);
console.log(`Errores: ${pixelesNegros2 >= 3 && pixelesNegros >= 25 ? "0 Es Original" : "1 No es original."}`);
