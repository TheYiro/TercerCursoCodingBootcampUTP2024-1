
//● V01
//● Ing. Jerónimo Mape Soto
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Programa que nos muestra un efecto de letras.

const columnas = 15; // Define el número de columnas en la pantalla para la animación
const velocidad = 500; // Define la velocidad de la animación en milisegundos

function imprimirLetras() {
  let posicionA1 = 0; // Almacena la posición del primer carácter "A" en la línea
  let posicionA2 = columnas - 1; // Almacena la posición del segundo carácter "A" en la línea

  const intervalo = setInterval(() => { // Configura un intervalo para ejecutar la animación
    
    console.clear(); // Limpia la consola en cada iteración del intervalo

    for (let i = 0; i < posicionA1; i++) { // Itera y agrega espacios antes del primer carácter "A"
      process.stdout.write(" ");
    }

    process.stdout.write("A"); // Escribe el primer carácter "A"

    for (let i = posicionA1 + 1; i < posicionA2; i++) { // Itera y agrega espacios entre los dos caracteres "A"
      process.stdout.write(" ");
    }
    process.stdout.write("A\n"); // Escribe el segundo carácter "A" seguido de un salto de línea

    posicionA1++; // Incrementa la posición del primer carácter "A"
    posicionA2--; // Decrementa la posición del segundo carácter "A"

    if (posicionA1 >= posicionA2) clearInterval(intervalo); // Detiene la animación cuando las posiciones coinciden
  }, velocidad); // Configura la velocidad de la animación
}

imprimirLetras(); // Inicia la animación de imprimir letras