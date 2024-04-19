//● V01
//● Ing. Jerónimo Mape Soto "Joaco" - Sebastian Tamayo "Soplayo" - JuanJose Corredor "Chili" -  Daniel Ramirez Hernandez
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Serie de Fibonacci del 0 al 10.000 sin sobrepasarlo

function fibonacci() {
// Inicializamos las dos primeras variables de la serie de Fibonacci
    let fib1 = 0; // Primer número de Fibonacci
    let fib2 = 1; // Segundo número de Fibonacci
    let fibNext = 0; // Variable para calcular el siguiente número de Fibonacci

    // Imprimimos un mensaje para indicar que estamos mostrando la serie de Fibonacci
    console.log("Serie de Fibonacci hasta 10,000:");

    // Iteramos hasta que el siguiente número de Fibonacci sea mayor que 10,000
    while (fibNext <= 10000) {
        // Imprimimos el número de Fibonacci actual
        console.log(fibNext);
        // Calculamos el siguiente número de Fibonacci sumando los dos anteriores
        fibNext = fib1 + fib2;
        // Actualizamos los dos números anteriores para la próxima iteración
        fib1 = fib2;
        fib2 = fibNext;
    }
}
// Llamamos a la función para generar la serie de Fibonacci
fibonacci();