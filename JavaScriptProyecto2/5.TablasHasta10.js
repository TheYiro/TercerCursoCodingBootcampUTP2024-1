//● V01
//● Ing. Jerónimo Mape Soto "Joaco" - Sebastian Tamayo "Soplayo" - JuanJose Corredor "Chili" -  Daniel Ramirez Hernandez
//● JavaScript
//● ECMASCRIPT 6.0
//● Universidad Tecnológica de Pereira
//● Programa de Ingeniería de Sistemas y Computación
//● Programa que hace la tablas del 1 hasta el 10.

function mostrarTablasMultiplicar() {
    // Ciclo externo para iterar a traves de los multiplicadores (del 1 al 10)
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        // Ciclo interno para iterar a traves de los multiplicandos (del 1 al 10)
        for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
            // Calcular el resultado de la multiplicacion
            let resultado = multiplicador * multiplicando;
            // Imprimir la multiplicacion
            console.log(`${multiplicador} x ${multiplicando} = ${resultado}`);
        }
    }
}

// Llamar a la funcion para mostrar todas las tablas de multiplicar del 1 al 10
mostrarTablasMultiplicar();