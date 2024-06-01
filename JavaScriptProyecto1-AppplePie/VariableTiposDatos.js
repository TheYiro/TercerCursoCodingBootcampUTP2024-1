const prompt = require('prompt-sync')(); // Importa el modulo 'prompt-sync' para obtener entrada del usuario de forma sincrona.

function convertirTemperatura(){
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados celsius: ")); // Almacena la temperatura en grados Celsius ingresada por el usuario.
    let Fahrenheit = (9/5 * celsius) + 32; // Almacena la temperatura convertida a grados Fahrenheit.
    console.log("La temperatura en grados Fahrenheit es: " + Fahrenheit.toFixed(2)); // Muestra la temperatura en grados Fahrenheit con dos decimales.
}

function calcularIMC() {
    let peso = parseFloat(prompt("Ingrese su peso en kilogramos: ")); // Almacena el peso ingresado por el usuario en kilogramos.
    let altura = parseFloat(prompt("Ingrese su altura en metros: ")); // Almacena la altura ingresada por el usuario en metros.
    let IMC = peso / Math.pow(altura, 2); // Calcula el indice de masa corporal (IMC) utilizando la formula peso / altura al cuadrado.
    console.log("Su indice de masa corporal (IMC) es: " + IMC.toFixed(2)); // Muestra el IMC con dos decimales.
}

function nombreUsuario() {
    let nombre = prompt("Ingrese su nombre: "); // Almacena el nombre ingresado por el usuario.
    let apellido = prompt("Ingrese su apellido: "); // Almacena el apellido ingresado por el usuario.
    let añoNacimiento = prompt("Ingrese su año de nacimiento: "); // Almacena el año de nacimiento ingresado por el usuario.
    let nombreUsuario = nombre + apellido + añoNacimiento; // Combina el nombre, apellido y año de nacimiento para formar el nombre de usuario.
    console.log("Nombre de usuario combinado: " + nombreUsuario); // Muestra el nombre de usuario combinado.
}

function calculaFibonnaci() {
    let n = parseInt(prompt("Ingrese el valor de n: ")); // Almacena el valor de 'n' ingresado por el usuario.
    let a = 0, b = 1, temp; // Declara variables para calcular la secuencia de Fibonacci.
    if (n == 0){
        console.log("El n-esimo numero Fibonacci es: " + a); // Si 'n' es 0, muestra el primer numero de Fibonacci.
    } else if (n == 1) {
        console.log("El n-esimo numero Fibonacci es: " + b); // Si 'n' es 1, muestra el segundo numero de Fibonacci.
    } else {
        for (let i = 2; i <= n; i++) { // Si 'n' es mayor que 1, calcula el 'n-esimo' numero de Fibonacci.
            temp = a + b;
            a = b;
            b = temp;
        }
        console.log("El n-esimo numero Fibonacci es: " + b); // Muestra el 'n-esimo' numero de Fibonacci.
    }
}

let opcion; // Almacena la opcion seleccionada por el usuario en el menu.
do {
    console.log("1. Conversor de temperatura: ");
    console.log("2. Calcular IMC: ");
    console.log("3. Generador nombre usuario: ");
    console.log("4. Funcion Fibonacci: ");
    console.log("5. Salir:");
    opcion = parseInt(prompt("Seleccione una opcion: ")); // Almacena la opcion seleccionada por el usuario en el menu.

    switch (opcion) {
        case 1:
            convertirTemperatura(); // Llama a la funcion para convertir la temperatura.
            break;
        case 2:
            calcularIMC(); // Llama a la funcion para calcular el IMC.
            break;
        case 3:
            nombreUsuario(); // Llama a la funcion para generar el nombre de usuario.
            break;
        case 4:
            calculaFibonnaci(); // Llama a la funcion para calcular la secuencia de Fibonacci.
            break;
        case 5:
            console.log("!Hasta pronto!"); // Muestra un mensaje de despedida cuando el usuario elige salir.
            break;
        default:
            console.log("Opcion invalida. Por favor, seleccione una opcion valida."); // Muestra un mensaje de error si el usuario selecciona una opcion invalida.
    }
} while (opcion !== 5); // Continua ejecutando el bucle hasta que el usuario elige salir (opcion 5).

/*
Version del codigo: 1.0.0
Autores: Juan Corredor y Jeronimo Mape
Nombre del lenguaje utilizado: ECMASCRIPT (JavaScript)
Version del lenguaje utilizado: 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Este programa es un menu interactivo que ofrece al usuario varias opciones relacionadas con calculos y funciones utiles.
Conversor de temperatura: Esta opcion permite al usuario ingresar una temperatura en grados Celsius y convierte esa temperatura a grados Fahrenheit utilizando la formula de conversion adecuada. Luego muestra el resultado en la consola.
Calcular IMC (Indice de Masa Corporal): El usuario puede ingresar su peso en kilogramos y su altura en metros. El programa calcula automaticamente el IMC utilizando la formula IMC = peso / altura^2 y muestra el resultado.
Generador de nombre de usuario: Aqui, el usuario puede ingresar su nombre, apellido y año de nacimiento. El programa combina estos datos para formar un nombre de usuario y lo muestra en la consola.
Funcion Fibonacci: Esta opcion permite al usuario ingresar un numero entero positivo 'n' y luego calcula el 'n-esimo' numero de la secuencia de Fibonacci. El programa muestra el resultado en la consola.
Salir: Esta opcion permite al usuario salir del programa.
El programa utiliza un bucle do-while para mostrar continuamente el menu y ejecutar la opcion seleccionada por el usuario hasta que elija salir (opcion 5).
Dependiendo de la opcion seleccionada por el usuario, se llamara a la funcion correspondiente para llevar a cabo la operacion deseada.
*/