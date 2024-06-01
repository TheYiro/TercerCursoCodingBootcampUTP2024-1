const prompt = require('prompt-sync')(); // Importa el modulo 'prompt-sync' para obtener entrada del usuario de forma sincrona.

function adivinarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Almacena un numero aleatorio entre 1 y 100.
    let intentos = 0; // Almacena el numero de intentos que ha realizado el usuario para adivinar el numero.
    let intentoUsuario; // Almacena el numero ingresado por el usuario en cada intento.
    do {
        intentoUsuario = parseInt(prompt("Intenta adivinar el numero (entre 1 y 100): ")); // Solicita al usuario que ingrese un numero para adivinar.
        intentos++; // Incrementa el contador de intentos en cada iteracion.
        if (intentoUsuario < numeroAleatorio) { // Comprueba si el numero ingresado por el usuario es menor que el numero aleatorio.
            console.log("El numero es demasiado bajo. Intenta de nuevo."); // Muestra un mensaje indicando que el numero es demasiado bajo.
        } else if (intentoUsuario > numeroAleatorio) { // Comprueba si el numero ingresado por el usuario es mayor que el numero aleatorio.
            console.log("El numero es demasiado alto. Intenta de nuevo."); // Muestra un mensaje indicando que el numero es demasiado alto.
        }
    } while (intentoUsuario !== numeroAleatorio); // Continua el bucle hasta que el usuario adivine el numero correcto.
    console.log("¡Felicidades! Adivinaste el numero en " + intentos + " intentos."); // Muestra un mensaje de felicitacion y el numero de intentos requeridos para adivinar.
}

function calcularFactorial() {
    let numero = parseInt(prompt("Ingrese un numero para calcular su factorial: ")); // Almacena el numero ingresado por el usuario para calcular su factorial.
    let factorial = 1; // Almacena el resultado del calculo del factorial, inicializado en 1.
    for (let i = 1; i <= numero; i++) { // Itera desde 1 hasta el numero ingresado por el usuario.
        factorial *= i; // Calcula el factorial multiplicando el resultado por el valor de cada iteracion.
    }
    console.log("El factorial de " + numero + " es: " + factorial); // Muestra el resultado del calculo del factorial.
}

function contarVocales() {
    let frase = prompt("Ingrese una frase para contar las vocales: "); // Almacena la frase ingresada por el usuario para contar las vocales.
    let vocales = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }; // Almacena un objeto con las vocales como claves y su recuento inicializado en 0.
    for (let letra of frase.toLowerCase()) { // Itera sobre cada letra de la frase en minusculas.
        if (letra in vocales) { // Comprueba si la letra es una vocal.
            vocales[letra]++; // Incrementa el contador de la vocal correspondiente.
        }
    }
    for (let vocal in vocales) { // Itera sobre cada vocal en el objeto 'vocales'.
        console.log("La vocal '" + vocal + "' aparece " + vocales[vocal] + " veces."); // Muestra el recuento de cada vocal.
    }
}

let opcion; // Almacena la opcion seleccionada por el usuario en el menu.
do {
    console.log("Menu:");
    console.log("1. Adivinar el numero");
    console.log("2. Calculadora de factorial");
    console.log("3. Contador de vocales");
    console.log("4. Salir");
    opcion = parseInt(prompt("Seleccione una opcion: ")); // Almacena la opcion seleccionada por el usuario en el menu.

    switch (opcion) {
        case 1:
            adivinarNumero(); // Llama a la funcion para adivinar el numero.
            break;
        case 2:
            calcularFactorial(); // Llama a la funcion para calcular el factorial.
            break;
        case 3:
            contarVocales(); // Llama a la funcion para contar las vocales en una frase.
            break;
        case 4:
            console.log("¡Hasta luego!"); // Muestra un mensaje de despedida cuando el usuario elige salir.
            break;
        default:
            console.log("Opcion invalida. Por favor, seleccione una opcion valida."); // Muestra un mensaje de error si el usuario selecciona una opcion invalida.
    }
} while (opcion !== 4); // Continua ejecutando el bucle hasta que el usuario elige salir (opcion 4).

/*
Version del codigo: 1.0.0
Autores: Juan Corredor y Jeronimo Mape
Nombre del lenguaje utilizado: ECMASCRIPT (JavaScript)
Version del lenguaje utilizado: 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Adivinar el numero: El programa genera un numero aleatorio entre 1 y 100. Luego, le pide al usuario que intente adivinar ese numero.
Despues de cada intento, el programa proporciona pistas si el numero proporcionado es demasiado bajo o demasiado alto. Continua solicitando al usuario que adivine hasta que adivine el numero correcto. 
Finalmente, muestra cuantos intentos le tomo al usuario adivinar el numero.
Calculadora de factorial: El usuario ingresa un numero entero positivo y el programa calcula su factorial.
Utiliza un bucle for para iterar desde 1 hasta el numero ingresado, multiplicando cada numero en el camino para calcular el factorial.
Contador de vocales: El programa le pide al usuario que ingrese una frase y luego cuenta el numero de veces que aparece cada vocal (a, e, i, o, u) en esa frase.
Utiliza un objeto para almacenar el recuento de cada vocal, y luego recorre cada letra de la frase, incrementando el contador correspondiente si la letra es una vocal.
Salir: Esta opcion permite al usuario salir del programa.
El programa utiliza un bucle do-while para mostrar continuamente el menu y ejecutar la opcion seleccionada por el usuario hasta que elija salir (opcion 4). 
Dependiendo de la opcion seleccionada por el usuario, se llamara a la funcion correspondiente para llevar a cabo la operacion deseada.
*/