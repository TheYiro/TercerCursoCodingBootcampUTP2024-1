//● V01
//● Ing. Jerónimo Mape Soto
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Hacer un rombo con Z.

// Definición de la función "renglones" que genera el patrón en la consola
function renglones(limite) {
    // Ciclo que itera sobre cada fila del patrón
    for (let renglon = 1; renglon <= limite; renglon++) {
        // Condiciones para determinar qué caracteres imprimir en cada fila
        
        // Si es la primera o la última fila
        if (renglon === 1 || renglon === 7) {
            espacios(9); // Llama a la función "espacios" para imprimir espacios en blanco
            letras(1); // Llama a la función "letras" para imprimir letras 'Z'
        }
        // Si es la segunda o la sexta fila
        if (renglon === 2 || renglon === 6) {
            espacios(8); // Llama a la función "espacios" para imprimir espacios en blanco
            letras(3); // Llama a la función "letras" para imprimir tres letras 'Z'
        }
        // Si es la tercera o la quinta fila
        if (renglon === 3 || renglon === 5) {
            espacios(7); // Llama a la función "espacios" para imprimir espacios en blanco
            letras(5); // Llama a la función "letras" para imprimir cinco letras 'Z'
        }
        // Si es la cuarta fila
        if (renglon === 4) {
            espacios(6); // Llama a la función "espacios" para imprimir espacios en blanco
            letras(7); // Llama a la función "letras" para imprimir siete letras 'Z'
        }
        console.log(); // Salto de línea
    }
}

// Función para imprimir espacios en blanco
function espacios(espacio) {
    for (let contador = 1; contador <= espacio; contador++) {
        process.stdout.write(" "); // Imprime un espacio en blanco
    }
}

// Función para imprimir letras 'Z'
function letras(cantidad) {
    for (let contador = 1; contador <= cantidad; contador++) {
        process.stdout.write("Z"); // Imprime una letra 'Z'
    }
}

// Llamada a la función "renglones" con un límite de 7 filas
renglones(7);