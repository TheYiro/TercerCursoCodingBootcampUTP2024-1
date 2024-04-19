//● V01
//● Ing. Jerónimo Mape Soto "Joaco" - Sebastian Tamayo "Soplayo" - JuanJose Corredor "Chili" -  Daniel Ramirez Hernandez
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Programa que factoriales.

const prompt = require('prompt-sync')(); // Importa el modulo 'prompt-sync' para obtener entrada del usuario de forma sincrona.

function calcularFactorial() {
    let numero;

    // Solicita al usuario que ingrese un numero entero positivo hasta que lo haga correctamente
    while (true) {
        numero = parseInt(prompt("Ingrese un numero entero positivo para calcular su factorial: "));

        if (numero >= 0) {
            break; // Sale del bucle si el numero ingresado es positivo o cero
        }

        console.log("El numero debe ser positivo o cero. Intentelo de nuevo.");
    }

    let factorial = 1; // Inicializa el resultado del factorial en 1.

    // Calcula el factorial del numero ingresado
    for (let i = 1; i <= numero; i++) {
        factorial *= i; // Multiplica el resultado por cada numero desde 1 hasta el numero ingresado.
    }

    console.log("El factorial de " + numero + " es: " + factorial); // Muestra el resultado del factorial.
}

// Llama a la funcion para comenzar el calculo del factorial
calcularFactorial();