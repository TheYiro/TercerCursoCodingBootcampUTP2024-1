//● V01
//● Ing. Jerónimo Mape Soto "Joaco" - Sebastian Tamayo "Soplayo" - JuanJose Corredor "Chili" -  Daniel Ramirez Hernandez
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Serie de Fibonacci del 0 al 10.000 sin sobrepasarlo

// Importar el módulo 'prompt-sync' para leer la entrada del usuario desde la terminal
const prompt = require('prompt-sync')();

// Definir una función para calcular la suma de los factoriales desde 0 hasta un número entero positivo ingresado por el usuario
function calcularSumaFactoriales() {
    // Solicitar al usuario que ingrese un número entero positivo para calcular su factorial
    let N = parseInt(prompt("Ingrese un numero entero positivo para calcular su factorial: "));

    // Validar que N sea un número entero no negativo
    while (isNaN(N) || N < 0) {
        // Si el usuario ingresa un valor no válido, mostrar un mensaje de error y solicitar nuevamente el número
        console.log("Debe ingresar un numero entero positivo. Intentelo de nuevo.");
        N = parseInt(prompt("Ingrese un numero entero positivos para calcular su factorial: "));
    }

    // Inicializar variables para almacenar la suma de los factoriales y el factorial actual
    let sumaFactoriales = 0;
    let factorial = 1;

    // Calcular la suma de los factoriales desde 0 hasta N
    for (let i = 0; i <= N; i++) {
        if (i > 0) {
            factorial *= i; // Calcular el factorial de i
        }
        sumaFactoriales += factorial; // Agregar el factorial actual a la suma total
    }

    // Mostrar el resultado de la suma de los factoriales
    console.log("La suma de los factoriales desde 0 hasta " + N + " es: " + sumaFactoriales);
}

// Llamar a la función para calcular la suma de los factoriales
calcularSumaFactoriales();
