//● V01
//● Ing. Jerónimo Mape Soto "Joaco" - Sebastian Tamayo "Soplayo" - JuanJose Corredor "Chili" -  Daniel Ramirez Hernandez
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Serie de Fibonacci del 0 al 10.000 sin sobrepasarlo

function fibonacciSum() {
    let fib1 = 0; // Primer número de Fibonacci
    let fib2 = 1; // Segundo número de Fibonacci
    let fibNext = 0; // Variable para calcular el siguiente número de Fibonacci
    let sum = 1; // Variable para almacenar la suma de los números de Fibonacci

    // Generamos la serie de Fibonacci hasta que el siguiente número sea mayor que 100
    while (fibNext <= 100) {
        // Si el número de Fibonacci actual está en el rango de 0 a 100, lo sumamos
        if (fibNext >= 0 && fibNext <= 100) {
            sum += fibNext;
        }
        // Calculamos el siguiente número de Fibonacci sumando los dos anteriores
        fibNext = fib1 + fib2;
        // Actualizamos los dos números anteriores para la próxima iteración
        fib1 = fib2;
        fib2 = fibNext;
    }

    // Imprimimos la suma de los números de Fibonacci en el rango de 0 a 100
    console.log("La suma de los elementos de la serie de Fibonacci entre 0 y 100 es:", sum);
}
// Llamamos a la función para obtener la suma de los elementos de la serie de Fibonacci
fibonacciSum();
