//● V01
//● Ing. Jerónimo Mape Soto "Joaco" - Sebastian Tamayo "Soplayo" - JuanJose Corredor "Chili" -  Daniel Ramirez Hernandez
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Hacer un programa de computador, de tal manera que lea desde el teclado un grupo de 15 números, diferentes a cero(validar este requisito) y al final de leídos, imprima:
 // -> Cantidad de números Mayores a 150.
 // -> Número mayor y número menor encontrado en el grupo.
 // -> Cantidad de Números negativos encontrados.
 // -> Promedio de los Positivos Encontrados.


const prompt = require('prompt-sync')(); // Importar la biblioteca prompt-sync
// Función para leer un número del teclado
function leerNumero(mensaje) {
    let numero;
    do {
        numero = parseFloat(prompt(mensaje)); // Convertir la entrada a un numero flotante
        if (isNaN(numero)) {
            console.log("¡Error! Debes ingresar un número válido.");
        } else if (numero === 0) {
            console.log("¡Error! El número debe ser diferente de cero.");
        }
    } while (isNaN(numero) || numero === 0); // Repetir hasta que se ingrese un número válido y diferente de cero
    return numero;
}
// Leer 15 numeros diferentes de cero
const numeros = [];
for (let i = 0; i < 15; i++) {
    numeros.push(leerNumero(`Ingresa el numero ${i + 1}: `));
}
// Inicializar variables para realizar calculos
let cantidadMayores150 = 0;
let numeroMayor = numeros[0];
let numeroMenor = numeros[0];
let cantidadNegativos = 0;
let sumaPositivos = 0;
let cantidadPositivos = 0;
// Recorrer el array de numeros para realizar los calculos
for (let numero of numeros) {
    if (numero > 150) {
        cantidadMayores150++;
    }
    if (numero > numeroMayor) {
        numeroMayor = numero;
    }
    if (numero < numeroMenor) {
        numeroMenor = numero;
    }
    if (numero < 0) {
        cantidadNegativos++;
    }
    if (numero > 0) {
        sumaPositivos += numero;
        cantidadPositivos++;
    }
}
// Calcular el promedio de los números positivos
let promedioPositivos = 0;
if (cantidadPositivos > 0) {
    promedioPositivos = sumaPositivos / cantidadPositivos;
}
// Imprimir los resultados
console.log("Cantidad de numeros mayores a 150:", cantidadMayores150);
console.log("Número mayor encontrado en el grupo:", numeroMayor);
console.log("Número menor encontrado en el grupo:", numeroMenor);
console.log("Cantidad de numeros negativos encontrados:", cantidadNegativos);
console.log("Promedio de los numeros positivos encontrados:", promedioPositivos);
