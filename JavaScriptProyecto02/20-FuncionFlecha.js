const prompt = require('prompt-sync')(); // Importa la librería prompt-sync

const rush = (x, y) => {
  if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
    console.log("Los valores de x e y deben ser enteros positivos.");
    return;
  }
  const ancho = Math.max(x, 2);
  const topBottom = `/${'*'.repeat(ancho - 2)}\\`;
  const middle = `*${' '.repeat(ancho - 2)}*`;
  console.log(topBottom);
  for (let i = 0; i < y - 2; i++) {
    console.log(middle);
  }
  if (y > 1) {
    console.log(topBottom);
  }
};

// Solicitar entrada de datos al usuario
const x = parseInt(prompt("Ingrese el valor de x: "));
const y = parseInt(prompt("Ingrese el valor de y: "));

// Llamar a la función "rush" con los valores proporcionados por el usuario
rush(x, y);

  
  /*Version del codigo: JavaScriptV1
  Autores: Jerónimo Mape Soto.
  Nombre del lenguaje utilizado: JavaScript 6.0
  Version del lenguaje utilizado: ECMASCRIPT 6.0
  Universidad tecnologica de pereira
  Programa de Ingenieria de Sistemas y Computacion
  
  Este programa genera un patrón rectangular compuesto por caracteres '' y espacios. 
  La función rush toma dos parámetros x y y, que representan el ancho y la altura del patrón respectivamente. 
  Si x o y no son enteros positivos, el programa imprime un mensaje de error. 
  Luego, construye el patrón utilizando caracteres '' y espacios, donde x determina el ancho mínimo del patrón y y determina el número de filas. 
  El patrón consta de una línea superior e inferior formada por '' y una sección central de filas compuestas únicamente por espacios, excepto la primera y última fila que también contienen ''.*/
  