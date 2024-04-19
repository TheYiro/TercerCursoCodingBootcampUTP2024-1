//● V01
//● Ing. Jerónimo Mape Soto "Joaco" - Sebastian Tamayo "Soplayo" - JuanJose Corredor "Chili" -  Daniel Ramirez Hernandez
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Hacer un programa de computador, de tal manera que lea desde el teclado un numero entero y lo imprima al revés.

// Importar la biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicitar al usuario que introduzca un numero
const numero = prompt("Digitar numero: ");

// Función para invertir un numero
function invertirNumero(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Invertir el numero introducido por el usuario
const numeroInvertido = invertirNumero(numero);

// Imprimir el numero invertido
console.log("El numero invertido es:", numeroInvertido);

